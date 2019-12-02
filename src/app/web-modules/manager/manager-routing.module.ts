import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RouteConstant} from '../../constant/routeconstant'
import { WorkforceManagementComponent } from './workforce-management/workforce-management.component';
import { PlanningComponent } from './planning/planning.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { DevelopingComponent } from './developing/developing.component';
import { SeperatingComponent } from './seperating/seperating.component';


//routes 
const routes: Routes = [

  {
    path: RouteConstant.workforceManagement,
    component: WorkforceManagementComponent,
   
   //child routing for workforce management component
    children:[
      {
        path: RouteConstant.workforcePlanning,
        component: PlanningComponent
      },
      {
        path: '',
        redirectTo: RouteConstant.workforceRecruitment,
        pathMatch: "full"
      },
      

      //currenly assigned componet
      {
        path: RouteConstant.workforceRecruitment,
        component: RecruitmentComponent
      },
      {
        path: RouteConstant.workforceOnboarding,
        component: OnboardingComponent
      },
      {
        path: RouteConstant.workforceDeveloping,
        component: DevelopingComponent
      },
      {
        path: RouteConstant.workforceSeperating,
        component: SeperatingComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: RouteConstant.workforceManagement,
    pathMatch: "full",
  }
];
//routes ends
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
