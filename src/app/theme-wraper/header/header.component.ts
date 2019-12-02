import { Component, OnInit } from '@angular/core';
import{RouteConstant} from '../../constant/routeconstant'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
routes=RouteConstant;
  constructor() { }

  ngOnInit() {
  }

}
