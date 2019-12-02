import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewbenifitsComponent } from './viewbenifits/viewbenifits.component';


const routes: Routes = [
  {
    path: '',
    component: ViewbenifitsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BenifitsRoutingModule { }
