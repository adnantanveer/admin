import { Component, OnInit } from '@angular/core';
import {RouteConstant} from '../../constant/routeconstant'
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  sidenav = [


    {
      name: 'News',
      icon: 'icon-newspaper',
      route: "/manage-news/view"
      // routes: RouteConstant.manager + '/' + RouteConstant.workforceManagement
    },
    {
      name: 'Calender',
      icon: 'icon-calendar',
      route: "/calender" 
    },
    {
      name: 'Benifit',
      icon: 'icon-voucher1',
      route: "/manage-benifits" 
    },
    {
      name: 'Learning',
      icon: 'icon-mortarboard-11',
      route: "/learning" 
    },
    {
      name: 'Goals',
      icon: 'icon-XMLID_9961',
      route: "/goals" 
    },
    {
      name: 'Manager',
      icon: 'icon-employee1',
      route: "/manage/workforce"

    },
    {
      name: 'More',
      icon: 'fa fa-plus-square',
      route: "/goals" 
       
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
