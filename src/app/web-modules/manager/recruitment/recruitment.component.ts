import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.scss']
})
export class RecruitmentComponent implements OnInit {
  show = true;

  cards = [
    {
      source: "assets/images/workforce/profilepic.jpg",
      status: "(Open Requestion)",
      position: "Developer",
      telno: "+123456789",
      show: false
    },
    {
      source: "assets/images/profilepic.jpeg",
      status: "(Open Requestion)",
      position: "Developer",
      telno: "+123456789",
      show: false,

      
    },
    {
      source: "assets/images/workforce/profilepic.jpg",
      status: "(Open Requestion)",
      position: "Developer",
      telno: "+123456789",
      show: false
    },
    {
      source: "assets/images/profilepic.jpeg",
      status: "(Open Requestion)",
      position: "Developer",
      telno: "+123456789",
      show: true
    },
    {
      source: "assets/images/workforce/profilepic.jpg",
      status: "(Open Requestion)",
      position: "Developer",
      telno: "+123456789",
      show: true

    },
    {
      source: "assets/images/workforce/profilepic.jpg",
      status: "(Open Requestion)",
      position: "Developer",
      telno: "+123456789",
      show: true

    },
    {
      source: "assets/images/profilepic.jpeg",
      status: "(Open Requestion)",
      position: "Developer",
      telno: "+123456789",
      show: false

    },
    {
      source: "assets/images/workforce/profilepic.jpg",
      status: "(Open Requestion)",
      position: "Developer",
      telno: "+123456789",
      show: false,

    },
    {
      source: "assets/images/profilepic.jpeg",
      status: "(Open Requestion)",
      position: "Developer",
      telno: "+123456789",
      show: true,

    }



  ]
  constructor() { }

  ngOnInit() {
  }

}
