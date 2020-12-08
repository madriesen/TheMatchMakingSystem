import { Component, OnInit } from '@angular/core';
import { faFutbol, faChess, faMapMarkerAlt, faChalkboardTeacher, faMedal } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  faFutbol = faFutbol;
  faChess = faChess;
  faMapMarkerAlt = faMapMarkerAlt;
  faPowerOff = faPowerOff;
  faChalkboardTeacher = faChalkboardTeacher;
  faMedal = faMedal;
  
  constructor() { }

  ngOnInit(): void {
  }

}
