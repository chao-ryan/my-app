import { Injectable } from "@angular/core";
import { HeroIntf } from "../interface";
import { HEROS } from "../const-def/hero-data-const-def";
import { Observable, of } from "rxjs";
import { MessagesService } from "./messages-service";
import { HttpClient } from "@angular/common/http";
// 导入错误处理操作符
import { catchError } from "rxjs/operators";
import { ErrorHandleService } from "./error-handle.service";
// 导入定数定义
import * as ConstDef from "../const-def/hero-service-const-def";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  // 服务器数据资源访问地址
  private heroesUrl: string;
  // 构造器
  constructor(
    private messagesService: MessagesService,
    private httpClient: HttpClient,
    private errorHandleService: ErrorHandleService
  ) {}

  /**
   * 获取英雄列表
   * @return 返回英雄列表
   */
  getHeroList(): Observable<HeroIntf[]> {
    // 添加消息
    const message = "HeroService: fetched heroes";
    this.log(message);
    return of(HEROS);
  }

  /**
   * 获取指定英雄信息
   * @param id 指定英雄id
   */
  getHero(id: number): Observable<HeroIntf> {
    // 添加信息 反引号 ( ` ) 用于定义 JavaScript 的 模板字符串字面量，以便嵌入 id
    const message = `HeroService: fetched hero id=${id}`;
    this.log(message);
    return of(HEROS.find(hero => hero.id === id))
  }

  /**
   * message打印
   * @param message 打印信息
   */
  private log(message: string) {
    this.messagesService.addMessage(`HeroService: ${message}`);
  }

  /**
   * 从http获取英雄数据
   * @return 返回英雄列表
   */
  getHeroesWithHttp (): Observable<HeroIntf[]> {
    return this.httpClient
      .get<HeroIntf[]>(this.heroesUrl)
      .pipe(  // catchError会拦截失败的Observable
        catchError(this.errorHandleService.handleError("getHeroesWithHttp", []))
      );
  }

  /**
   * 从http获取单个英雄数据
   * @param id 指定英雄id
   * @return 返回单个英雄对象
   */
  getHeroByIdWithHttp(id: number): Observable<HeroIntf> {
    const url = `${this.heroesUrl}/${id}`;
    return this.httpClient.get<HeroIntf>(url).pipe(
      catchError(this.errorHandleService.handleError<HeroIntf>(`getHeroByIdWithHttp id=${id}`))
    );
  }

  /**
   * 修改数据
   * @param hero 要修改的数据
   * @return 返回处理结果
   */
  update(hero: HeroIntf): Observable<any> {
    return this.httpClient.put(this.heroesUrl, hero, ConstDef.HERO_HTTP_OPTIONS).pipe(
      catchError(this.errorHandleService.handleError<any>("update"))
    );
  }

  /**
   * 保存数据
   * @param hero 要保存的英雄数据
   * @return 返回保存后的当前英雄对象
   */
  save(hero: HeroIntf): Observable<HeroIntf> {
    return this.httpClient.post<HeroIntf>(this.heroesUrl, hero, ConstDef.HERO_HTTP_OPTIONS).pipe(
      catchError(this.errorHandleService.handleError<HeroIntf>("save"))
    );
  }

  /**
   * 删除数据
   * @param hero 要删除的英雄对象或id
   * @return 返回删除的英雄观察对象
   */
  delete(hero: HeroIntf | number): Observable<HeroIntf> {
    const id = typeof hero === "number" ? hero: hero.id;
    const url = `${this.heroesUrl}/${id}`;
    return this.httpClient.delete<HeroIntf>(url, ConstDef.HERO_HTTP_OPTIONS).pipe(
      catchError(this.errorHandleService.handleError<HeroIntf>("delete"))
    );
  }
}
