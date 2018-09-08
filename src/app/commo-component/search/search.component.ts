import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HeroIntf } from "../../interface";
import { HeroService } from "../../service/hero.service";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  // 英雄数组 $ 是一个命名惯例，用来表明 heroes$ 是一个 Observable，而不是数组
  heroes$: Observable<HeroIntf[]>;
  // 搜索关键词 Subject 既是可观察对象的数据源，本身也是 Observable
  private searchInput = new Subject<string>();

  /**
   * 构造器
   */
  constructor(private heroService: HeroService) {}

  /**
   * 画面初期event
   */
  ngOnInit() {
    // 画面data初期化
    this.doInit();
  }

  /**
   * 关键词搜索
   * @param searchStr 搜索关键词
   */
  search(searchStr: string) {
    this.searchInput.next(searchStr);
  }

  /**
   * 画面data初期化
   */
  private doInit() {
    this.heroes$ = this.searchInput.pipe(
      // 每次输入后，先等待300ms再关心这个搜索关键词 (在传出最终字符串之前，debounceTime(300) 将会等待)
      debounceTime(300),
      // 如果输入的词和之前的关键词一样则忽视 (确保只在过滤条件变化时才发送请求)
      distinctUntilChanged(),
      // 搜索关键词改变时更新搜索观察对象 (取消并丢弃以前的搜索可观察对象，只保留最近的)
      switchMap((input: string) => this.heroService.search(input)),
    );
  }
}
