import { Component, OnInit, Input } from "../../../../node_modules/@angular/core";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit {
 @Input() hero: any;
 @Input() showFlg: boolean;
  /**
   * 构造器
   */
  constructor() {}

  /**
   * 画面启动event
   */
  ngOnInit() {}
}
