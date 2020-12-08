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
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("https://localhost:44340/api/user/");
  }

  addUser(newUser: User): Observable<User> {
    return this.http.post<User>("https://localhost:44340/api/user/", newUser);
  }

  deleteUser(userID: number): Observable<User> {
    return this.http.delete<User>("https://localhost:44340/api/user/" + userID);
  }
}
