import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    // todo: implement logout
    this.router.navigate(['/']);
  }

}
