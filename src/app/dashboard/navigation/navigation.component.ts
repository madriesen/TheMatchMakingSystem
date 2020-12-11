import { Component, OnInit } from '@angular/core';
import { faFutbol, faChess, faMapMarkerAlt, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/competitions/models/user.model';
import { AuthenticatedUserService } from 'src/app/services/authenticated-user.service';

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
  constructor(private _authenticatedUserService: AuthenticatedUserService) { }

  ngOnInit(): void {
    this.getAuthUser()
  }

  firstName = localStorage.getItem("firstName");
  lastName = localStorage.getItem("lastName");
authUser: User;
  getAuthUser()
  {
    this.authUser = this._authenticatedUserService.getAuthenticatedUser();

  }
  

}
