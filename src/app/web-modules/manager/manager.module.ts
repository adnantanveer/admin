import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ManagerRoutingModule } from './manager-routing.module';
import { WorkforceManagementComponent } from './workforce-management/workforce-management.component';
import { PlanningComponent } from './planning/planning.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { DevelopingComponent } from './developing/developing.component';
import { SeperatingComponent } from './seperating/seperating.component';


@NgModule({
  declarations: [WorkforceManagementComponent, PlanningComponent, RecruitmentComponent, OnboardingComponent, DevelopingComponent, SeperatingComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    NgbModule
    
  ]
})
export class ManagerModule { }
