import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserLogin } from 'src/app/models/user-login.model';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { AuthenticatedUserService } from 'src/app/services/authenticated-user.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out',
              style({ height: 300, opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: 300, opacity: 1 }),
            animate('1s ease-in',
              style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class LoginComponent implements OnInit {

  private location: string;
  user: User ;


  constructor(private _authenticateService : AuthenticateService, private _authenticatedUser: AuthenticatedUserService, private router: Router) {
    this.location = 'welcome';
  }

  ngOnInit(): void {
  }

  public setLocation(location: string): void {
    this.location = location;
  }

  public getLocation(): string {
    return this.location;
  }

  submitted: boolean= false
  userLogin: UserLogin = new UserLogin("", "");
  login() {
    this.submitted = true;
    this._authenticateService.authenticate(this.userLogin).subscribe(result => {
    localStorage.setItem("token",result.token);
    this._authenticatedUser.setAuthenticatedUser(result)
    //console.log("username", this.userLogin.username)
    //console.log("password",this.userLogin.password)
    localStorage.setItem("firstName",result.firstName);
    localStorage.setItem("lastName",result.lastName);
    localStorage.setItem("role",result.role.name);
    });
    
    this.router.navigate(['/dashboard']);
    
  }

}
