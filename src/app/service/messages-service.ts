import { Injectable } from "../../../node_modules/@angular/core";

@Injectable({
  providedIn: "root"
})
export class MessagesService {
  // 显示的消息
  messages: string[] = [];

  /**
   * 添加消息
   * @param message 要显示的消息
   */
  addMessage(message: string) {
    this.messages.push(message);
  }

  /**
   * 消息清除
   */
  clearMessage() {
    this.messages = [];
  }
}
