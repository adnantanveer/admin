import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearningListingComponent } from './learning-listing/learning-listing.component';


const routes: Routes = [
  {
    path: '',
    component: LearningListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningRoutingModule { }
