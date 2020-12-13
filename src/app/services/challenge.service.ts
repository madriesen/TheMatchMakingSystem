import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


import { Competition } from '../models/competition.model';
import { Ploeg } from '../models/ploeg.model';
import { Table } from '../models/table.model';
import { Team } from '../models/team.model';
import { Wedstrijd } from '../models/wedstrijd.model';

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
  getPloegenOfTournooi(tournooiid:number): Observable<Competition> {
    return this.http.get<Competition>(environment.API_ENDPOINT + "/Tournooi/ploegen/"+tournooiid);
  }
  getTeamsofPloeg(ploegid:number): Observable<Team[]>{
    return this.http.get<Team[]>(environment.API_ENDPOINT + "/Team/ploeg/"+ploegid);
  }
  getTablesByPloegID(ploegid:number): Observable<Table[]>{
    return this.http.get<Table[]>(environment.API_ENDPOINT + "/Table/ploeg/"+ploegid);
  }
  addWedstrijd(newWedstrijd: Wedstrijd): Observable<Wedstrijd> {
    return this.http.post<Wedstrijd>(environment.API_ENDPOINT + "/Wedstrijd/", newWedstrijd);

  }
}
