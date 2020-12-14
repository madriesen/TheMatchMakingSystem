import { Component, OnInit } from '@angular/core';

import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { faChess } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(private router: Router) { }
 
  ngOnInit(): void {
  }

  
  firstName= localStorage.getItem("firstName") || null;
  lastName =  localStorage.getItem("lastName") || null;
  
logout(){
  console.log("test2")
  
}

}
