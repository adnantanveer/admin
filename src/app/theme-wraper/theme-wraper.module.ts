import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeWraperRoutingModule } from './theme-wraper-routing.module';
import { ViewWraperComponent } from './view-wraper/view-wraper.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ViewWraperComponent, HeaderComponent, SideNavComponent, FooterComponent],
  imports: [
    CommonModule,
    ThemeWraperRoutingModule,
    NgbModule
  ]
})
export class ThemeWraperModule { }
