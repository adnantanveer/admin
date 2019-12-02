import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewWraperComponent } from './view-wraper/view-wraper.component';


const routes: Routes = [
  {

    //wraping the header fotter and side nav in View wraper component
    path: '',
    component: ViewWraperComponent,
    //child roiuting for inner content
    children: [
      {
        path: '',
        loadChildren: () => import('../web-modules/web-modules.module').then(m => m.WebModulesModule)
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeWraperRoutingModule { }
