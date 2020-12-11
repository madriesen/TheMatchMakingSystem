import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Table } from '../models/table.model';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor(private http: HttpClient) { }

  getTables(): Observable<Table[]> 
  {
    return this.http.get<Table[]>("https://foosballapi20201208154849.azurewebsites.net/api/Table");
  }


}
