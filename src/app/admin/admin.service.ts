import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../competitions/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  //USERS
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("https://localhost:5001/api/user", {
        headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
      });
  }

  addUser(newUser: User): Observable<User> {
    return this.http.post<User>("https://localhost:5001/api/user/", newUser, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  deleteUser(userID: number): Observable<User> {
    return this.http.delete<User>("https://localhost:5001/api/user/" + userID, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }
}
