import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Ploeg } from '../models/ploeg.model';
import { environment } from './../../environments/environment';
import { Team } from '../models/team.model';
import { Competition } from '../models/competition.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  //USERS
  getUser(UserID: number): Observable<User> {
    return this.http.get<User>(environment.API_ENDPOINT + "/user/" + UserID)
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.API_ENDPOINT + "/user");
  }

  addUser(newUser: User): Observable<User> {
    return this.http.post<User>(environment.API_ENDPOINT + "/user/", newUser);

  }

  deleteUser(userID: number): Observable<User> {
    return this.http.delete<User>(environment.API_ENDPOINT + "/user/" + userID);
  }

  //PLOEGEN
  getPloegById(PloegID: number): Observable<Ploeg> {
    return this.http.get<Ploeg>(environment.API_ENDPOINT + "/ploeg/" + PloegID);
  }

  getPloegen(): Observable<Ploeg[]> {
    return this.http.get<Ploeg[]>(environment.API_ENDPOINT + "/ploeg");
  }

  addPloeg(newPloeg: Ploeg): Observable<Ploeg> {
    return this.http.post<Ploeg>(environment.API_ENDPOINT + "/ploeg/", newPloeg);
  }

  deletePloeg(PloegID: number): Observable<Ploeg> {
    return this.http.delete<Ploeg>(environment.API_ENDPOINT + "/ploeg/" + PloegID);
  }

  updatePloeg(PloegID: number, ploeg: Ploeg): Observable<Ploeg> {
    return this.http.put<Ploeg>(environment.API_ENDPOINT + "/ploeg/" + PloegID, ploeg); 
  }

  //TEAMS
  getTeamById(TeamID: number): Observable<Team> {
    return this.http.get<Team>(environment.API_ENDPOINT + "/team/" + TeamID);
  }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(environment.API_ENDPOINT + "/team");
  }

  addTeam(newTeam: Team): Observable<Team> {
    return this.http.post<Team>(environment.API_ENDPOINT + "/team/", newTeam);
  }

  deleteTeam(TeamID: number): Observable<Team> {
    return this.http.delete<Team>(environment.API_ENDPOINT + "/team/" + TeamID);
  }

  updateTeam(TeamID: number, team: Team): Observable<Team> {
    return this.http.put<Team>(environment.API_ENDPOINT + "/team/" + TeamID, team); 
  }

  //COMPETITIONS
  getCompetitionById(CompetitionID: number): Observable<Competition> {
    return this.http.get<Competition>(environment.API_ENDPOINT + "/tournooi/" + CompetitionID);
  }

  getCompetitions(): Observable<Competition[]> {
    return this.http.get<Competition[]>(environment.API_ENDPOINT + "/tournooi");
  }

  addCompetition(newCompetition: Competition): Observable<Competition> {
    return this.http.post<Competition>(environment.API_ENDPOINT + "/tournooi/", newCompetition);
  }

  deleteCompetition(CompetitionID: number): Observable<Competition> {
    return this.http.delete<Competition>(environment.API_ENDPOINT + "/tournooi/" + CompetitionID);
  }

  updateCompetition(CompetitionID: number, competition: Competition): Observable<Competition> {
    return this.http.put<Competition>(environment.API_ENDPOINT + "/tournooi/" + CompetitionID, competition); 
  }
}
