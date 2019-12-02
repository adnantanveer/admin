import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewCalenderComponent } from './view-calender/view-calender.component';


const routes: Routes = [

  {
    path: '',
    component: ViewCalenderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalenderRoutingModule { }
