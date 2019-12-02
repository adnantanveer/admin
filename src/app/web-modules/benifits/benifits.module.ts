import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BenifitsRoutingModule } from './benifits-routing.module';
import { ViewbenifitsComponent } from './viewbenifits/viewbenifits.component';


@NgModule({
  declarations: [ViewbenifitsComponent],
  imports: [
    CommonModule,
    BenifitsRoutingModule
  ]
})
export class BenifitsModule { }
