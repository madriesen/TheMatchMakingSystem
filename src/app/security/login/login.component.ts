import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserLogin } from 'src/app/models/user-login.model';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { AuthenticatedUserService } from 'src/app/services/authenticated-user.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  // location: string;



  constructor(private _authenticateService: AuthenticateService, private _authenticatedUser: AuthenticatedUserService, private router: Router) {
    this.location = 'welcome';
  }

  ngOnInit(): void {
  }

  @Input() location: string;
  @Output() chooseLocation = new EventEmitter<string>();
  choose(l: string) {
    this.chooseLocation.emit(l);

  }

  submitted: boolean = false
  userLogin: UserLogin = new UserLogin("", "");
  login() {
    this.submitted = true;
    this._authenticateService.authenticate(this.userLogin).subscribe(result => {
      localStorage.setItem("token", result.token);
      this._authenticatedUser.setAuthenticatedUser(result)
      localStorage.setItem("firstName", result.firstName);
      localStorage.setItem("lastName", result.lastName);
      localStorage.setItem("ranking",String(result.ranking));
      localStorage.setItem("ploegid", String(result.ploegID));
      localStorage.setItem("roleid", String(result.roleID));
      this.router.navigate(['/dashboard']);
    
    }, error => {
      console.log('error', error)
    });


  }

}
