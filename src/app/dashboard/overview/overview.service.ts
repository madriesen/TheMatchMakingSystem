import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wedstrijd } from 'src/app/models/wedstrijd.model';
import { Table } from 'src/app/models/table.model';
import { Team } from 'src/app/models/team.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  constructor(private http: HttpClient) { }

  getTables(): Observable<Table[]> {
    return this.http.get<Table[]>(environment.API_ENDPOINT + "/Table");
  }
  getMatches(): Observable<Wedstrijd[]> {
    return this.http.get<Wedstrijd[]>(environment.API_ENDPOINT + "/Wedstrijd");
  }
  getMyTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(environment.API_ENDPOINT + "/Team/myTeams");
  }
  getMatchWithoutWinner(): Observable<Wedstrijd[]> {
    return this.http.get<Wedstrijd[]>(environment.API_ENDPOINT + "/wedstrijd/open");
  }
  getMatchOfTeam(id:number): Observable<Wedstrijd[]> {
    return this.http.get<Wedstrijd[]>(environment.API_ENDPOINT + "/wedstrijd/"+id);
  }
}
