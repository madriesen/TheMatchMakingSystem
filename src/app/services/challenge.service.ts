import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Wedstrijd } from '../competitions/models/wedstrijd.model';

import { Competition } from '../models/competition.model';
import { Table } from '../models/table.model';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(private http: HttpClient) { }

  getCompetitions(): Observable<Competition[]> {
    return this.http.get<Competition[]>(environment.API_ENDPOINT + "/Tournooi");
  }
  getMyTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(environment.API_ENDPOINT + "/Team/MyTeams");
  }
  getCompetitionsTeamID(teamid:number): Observable<Wedstrijd[]> {
    return this.http.get<Wedstrijd[]>(environment.API_ENDPOINT + "/Wedstrijd/team/"+teamid);
  }
}
