import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/user-login.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private _httpClient: HttpClient) 
  { 
    
  }

  authenticate(userLogin: UserLogin): Observable<User> 
  {
    //check port!!
    return this._httpClient.post<User>("https://localhost:5001/api/User/authenticate", userLogin);
  }
}
