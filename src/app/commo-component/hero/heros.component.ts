import { Component, OnInit } from "../../../../node_modules/@angular/core";

@Component({
  selector: "app-heros",
  templateUrl: "./heros.component.html",
  styleUrls: ["./heros.component.css"]
})
export class Herosomponent implements OnInit {
  hero = "WindStorm";

  constructor(){}

  ngOnInit(){
    this.doInit();
  }

  private doInit() {
    alert("heros");
  }
}
