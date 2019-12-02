import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import {RouteConstant} from '../../constant/routeconstant'

const routes: Routes = [

  {
    path: RouteConstant.viewNews,
    component: NewsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
