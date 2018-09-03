import { Component, OnInit } from "@angular/core";
import { MessagesService } from "../../service/messages-service";


@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit {
  // messages表示非表示flg
  messageShowFlg: boolean;
  /**
   * 构造器
   */
  constructor(public messagesService: MessagesService) {}

  /**
   * 画面初期化event
   */
  ngOnInit() {}
}
