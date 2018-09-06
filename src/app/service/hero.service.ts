import { Injectable } from "../../../node_modules/@angular/core";
import { HeroIntf } from "../interface";
import { HEROS } from "../const-def/hero-data-const-def";
import { Observable, of } from "../../../node_modules/rxjs";
import { MessagesService } from "./messages-service";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  // 构造器
  constructor(private messagesService: MessagesService) {}

  /**
   * 获取英雄列表
   * @return 返回英雄列表
   */
  getHeroList(): Observable<HeroIntf[]> {
    // 添加消息
    this.messagesService.addMessage("HeroService: fetched heroes");
    return of(HEROS);
  }

  /**
   * 获取指定英雄信息
   * @param id 指定英雄id
   */
  getHero(id: number): Observable<HeroIntf> {
    // 添加信息 反引号 ( ` ) 用于定义 JavaScript 的 模板字符串字面量，以便嵌入 id
    this.messagesService.addMessage(`HeroService: fetched hero id=${id}`);
    return of(HEROS.find(hero => hero.id === id))
  }
}
