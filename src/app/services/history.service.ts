import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from '../models/team.model';
import { Wedstrijd } from '../models/wedstrijd.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }

  getMyTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(environment.API_ENDPOINT + "/Team/myTeams");
  }
  getWedstrijdByTeamID(teamid:number): Observable<Wedstrijd[]> {
    return this.http.get<Wedstrijd[]>(environment.API_ENDPOINT + "/Wedstrijd/team/"+teamid);
  }
}
