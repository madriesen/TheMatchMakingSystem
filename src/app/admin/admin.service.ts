import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../competitions/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  //USERS
  addUser(newUser: User): Observable<User> {
    return this.http.post<User>("http://localhost:44340/api/user/", newUser);
  }
}
