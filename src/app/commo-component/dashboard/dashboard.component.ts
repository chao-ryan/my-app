import { Component, OnInit } from "@angular/core";
import { HeroIntf } from "../../interface";
import { HeroService } from "../../service/hero.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  // 英雄列表
  heroes: HeroIntf[] = [];

  /**
   * 构造器
   */
  constructor(private heroService: HeroService) {}

  /**
   * 画面启动event
   */
  ngOnInit() {
    // 画面data初期化
    this.doInit();
  }

  /**
   * 画面data初期化
   */
  private doInit() {
    // 获取英雄列表
    this.heroService.getHeroList()
    .subscribe(heroList => this.heroes = heroList.slice(1, 5));
  }
}
