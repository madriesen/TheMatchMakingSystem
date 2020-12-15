import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/user-login.model';
import { User } from '../models/user.model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private _httpClient: HttpClient, private route: Router) {

  }

  authenticate(userLogin: UserLogin): Observable<User> {

    return this._httpClient.post<User>(environment.API_ENDPOINT + "/User/authenticate", userLogin);
  }
  
}
