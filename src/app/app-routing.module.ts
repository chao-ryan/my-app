import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  HerosComponent,
  DashboardComponent,
  HeroDetailComponent
} from "./commo-component";

const routes: Routes = [
  {
    path: "heroes",
    component: HerosComponent,
    data: { title: "英雄列表" }
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    data: { title: "英雄仪表盘" }
  },
  {
    path: "heroDetail/:id",
    component: HeroDetailComponent,
    data: { title: "英雄详情" }
  }
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
