import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalenderRoutingModule } from './calender-routing.module';
import { ViewCalenderComponent } from './view-calender/view-calender.component';


@NgModule({
  declarations: [ViewCalenderComponent],
  imports: [
    CommonModule,
    CalenderRoutingModule
  ]
})
export class CalenderModule { }
