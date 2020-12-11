import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../competitions/models/user.model';
import { Ploeg } from '../models/ploeg.model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  //USERS
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.API_ENDPOINT + "https://localhost:5001/api/user");
  }

  addUser(newUser: User): Observable<User> {
    return this.http.post<User>(environment.API_ENDPOINT + "https://localhost:5001/api/user/", newUser);

  }

  deleteUser(userID: number): Observable<User> {
    return this.http.delete<User>(environment.API_ENDPOINT + "https://localhost:5001/api/user/" + userID);
  }

  //PLOEGEN
  getPloegen(): Observable<Ploeg[]> {
    return this.http.get<Ploeg[]>(environment.API_ENDPOINT + "https://localhost:5001/api/ploeg");
  }

  addPloeg(newPloeg: Ploeg): Observable<Ploeg> {
    return this.http.post<Ploeg>(environment.API_ENDPOINT + "https://localhost:5001/api/ploeg/", newPloeg);

  }

  deletePloeg(PloegID: number): Observable<Ploeg> {
    return this.http.delete<Ploeg>(environment.API_ENDPOINT + "https://localhost:5001/api/ploeg/" + PloegID);

  }
}
