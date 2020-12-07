import { Component, OnInit } from '@angular/core';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { faChess } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  faFutbol = faFutbol;
  faChess = faChess;
  faMapMarkerAlt = faMapMarkerAlt;
  faPowerOff = faPowerOff;

  constructor() { }

  ngOnInit(): void {
  }

}
