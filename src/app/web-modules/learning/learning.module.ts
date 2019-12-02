import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningRoutingModule } from './learning-routing.module';
import { LearningListingComponent } from './learning-listing/learning-listing.component';


@NgModule({
  declarations: [LearningListingComponent],
  imports: [
    CommonModule,
    LearningRoutingModule
  ]
})
export class LearningModule { }
