import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RouteConstant} from "../constant/routeconstant"

const routes: Routes = [

{

  //currently assigned modue
  path: RouteConstant.manager,
  loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule)
},

//other required modules as pe the image provided in sidebar
{
  path: RouteConstant.manageNews,
  loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
},

{
  path: RouteConstant.manageBenifits,
  loadChildren: () => import('./benifits/benifits.module').then(m => m.BenifitsModule)
},

{
  path: RouteConstant.calender,
  loadChildren: () => import('./calender/calender.module').then(m => m.CalenderModule)
},
{
  path: RouteConstant.gaols,
  loadChildren: () => import('./goals/goals.module').then(m => m.GoalsModule)
},

{
  path: RouteConstant.learning,
  loadChildren: () => import('./learning/learning.module').then(m => m.LearningModule)
},





{
  path: '',
  redirectTo: RouteConstant.manager,
  pathMatch: "full"
}
];

@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class WebModulesRoutingModule { }
