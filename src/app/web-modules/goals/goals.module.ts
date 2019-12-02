import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalsRoutingModule } from './goals-routing.module';
import { GoallistingComponent } from './goallisting/goallisting.component';


@NgModule({
  declarations: [GoallistingComponent],
  imports: [
    CommonModule,
    GoalsRoutingModule
  ]
})
export class GoalsModule { }
