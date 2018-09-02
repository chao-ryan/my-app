import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HerosComponent } from './commo-component/hero/heros.component';
import { HeroDetailComponent } from './commo-component/hero-detail/hero-detail.component';
import { MessagesComponent } from './commo-component/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent, HerosComponent, HeroDetailComponent, MessagesComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
