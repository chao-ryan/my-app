import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroService } from "../../service/hero.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit {
  // 指定英雄信息
 @Input() hero: any;
 // 详情画面表示非表示flg true:表示 false:非表示
 showFlg: boolean;
  /**
   * 构造器
   */
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  /**
   * 画面启动event
   */
  ngOnInit() {
    // 画面data初期化
    this.doInit();
  }

  /**
   * 后退事件
   */
  goBack() {
    // 返回历史纪录上一步
    this.location.back();
  }

  /**
   * 画面data初期化
   */
  doInit() {
    // 获取指定英雄信息
    this.getHero();
    if (this.hero) {
      // 详情画面表示flg设定
      this.showFlg = true;
    } else {
      // 详情画面非表示设定
      this.showFlg = false;
    }
  }

/**
 * 获取指定英雄信息
 */
  private getHero() {
    // 英雄id取得
    const id = +this.route.snapshot.paramMap.get('id');
    // 获取指定英雄信息
    this.heroService.getHero(id)
      .subscribe(heroTmp => this.hero = heroTmp);
  }
}
