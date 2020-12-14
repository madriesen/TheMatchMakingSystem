import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ploeg } from '../models/ploeg.model';
import { Table } from '../models/table.model';
import { User } from '../models/user.model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor(private http: HttpClient) { }

  getTables(): Observable<Table[]> {
    return this.http.get<Table[]>(environment.API_ENDPOINT + "/Table");
  }

   //USERS
   getUsers(): Observable<User[]> 
  {
    return this.http.get<User[]>(environment.API_ENDPOINT + "/user");
  }

  getUser(userID: number): Observable<User> {
    return this.http.get<User>(environment.API_ENDPOINT + "/user/" + userID)
  }

  getPloegById(ploegID: number): Observable<Ploeg> {
    return this.http.get<Ploeg>(environment.API_ENDPOINT + "/ploeg/" + ploegID);
  }

  getPloegen(): Observable<Ploeg[]>
  {
    return this.http.get<Ploeg[]>(environment.API_ENDPOINT + "/ploeg/");
  }

  addTable(table: Table): Observable<Table>
  {
    return this.http.post<Table>(environment.API_ENDPOINT + "/table/" , table);
  }


  deleteTable(tableID: number): Observable<Table>
  {
    return this.http.delete<Table>(environment.API_ENDPOINT + "/table/" + tableID)
  }
}
