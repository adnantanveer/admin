import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoallistingComponent } from './goallisting/goallisting.component';


const routes: Routes = [

  {
    path: '',
    component: GoallistingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsRoutingModule { }
