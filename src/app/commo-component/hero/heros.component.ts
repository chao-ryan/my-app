import { Component, OnInit } from "@angular/core";
import { HeroIntf } from "../../interface";
import { HeroService } from "../../service/hero.service";

@Component({
  selector: "app-heros",
  templateUrl: "./heros.component.html",
  styleUrls: ["./heros.component.css"]
})
export class HerosComponent implements OnInit{
  // 选中英雄
  selectedHero: HeroIntf = {
    id: undefined,
    name: undefined
  };
  // 英雄list
  heroes: HeroIntf[];
  // 英雄详情表示非表示flg true:表示 false:非表示
  heroDetailShowFlg: boolean = false;

  /**
   * 构造器
   * @param heroService 英雄服务service
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
   * 选中英雄显示event
   * @param hero 选中的英雄
   */
  doSelectHero(hero: HeroIntf) {
    // 显示选中的英雄
    this.selectedHero = hero;
    // 英雄详情表示
    this.heroDetailShowFlg = true;
  }

  /**
   * 画面data初期化
   */
  private doInit() {
    // 获取英雄列表
    this.getHero();
  }

  /**
   * 获取英雄信息
   */
  private getHero() {
    // 获取英雄信息
    this.heroService.getHeroList().subscribe(heroList => this.heroes = heroList);
  }
}
