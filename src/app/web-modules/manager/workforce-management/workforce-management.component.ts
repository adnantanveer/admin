import { Component, OnInit } from '@angular/core';
import {RouteConstant} from '../../../constant/routeconstant'

@Component({
  selector: 'app-workforce-management',
  templateUrl: './workforce-management.component.html',
  styleUrls: ['./workforce-management.component.scss']
})
export class WorkforceManagementComponent implements OnInit {


  routes=RouteConstant
  
  constructor() { }

  ngOnInit() {
  }

}
