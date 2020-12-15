import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ploeg } from '../models/ploeg.model';
import { Team } from '../models/team.model';
import { User } from '../models/user.model';
import { WedstrijdType } from '../models/wedstrijd-type.model';
import { Wedstrijd } from '../models/wedstrijd.model';
import { AuthenticatedUserService } from './authenticated-user.service';

@Injectable({
  providedIn: 'root'
})
export class WedstrijdService {

  constructor(private http: HttpClient, private _authenticatedUserService: AuthenticatedUserService) { }

  //get wedstrijden for current user
  getUserWedstrijden(teamID: number): Observable<Wedstrijd[]>
  {
    return this.http.get<Wedstrijd[]>(environment.API_ENDPOINT + "/Wedstrijd/team/" + teamID);
  }

  //get wedstrijdType by ID
  getWedstrijdTypeByID(wedstrijdTypeID: number): Observable<WedstrijdType>
  {
    return this.http.get<WedstrijdType>(environment.API_ENDPOINT + "/WedstrijdType/" + wedstrijdTypeID)
  }

  getUserTeams(): Observable<Team[]>
  {
    return this.http.get<Team[]>(environment.API_ENDPOINT + "/Team/myTeams/");
  }

  getWedstrijdenForTeamByTeamID(teamID: number): Observable<Wedstrijd[]>
  {
    return this.http.get<Wedstrijd[]>(environment.API_ENDPOINT + "/Wedstrijd/team/" + teamID);
  }

  getTeamWithPloegByTeamID(teamID: number): Observable<Team>
  {
    return this.http.get<Team>(environment.API_ENDPOINT + "/Team/withPloeg/" + teamID);
  }

  getploegByID(ploegID: number): Observable<Ploeg>
  {
    return this.http.get<Ploeg>(environment.API_ENDPOINT + "/Ploeg/" + ploegID);
  }

  getWedstrijdByID(wedstrijdID: number): Observable<Wedstrijd>
  {
    return this.http.get<Wedstrijd>(environment.API_ENDPOINT + "/Wedstrijd/" + wedstrijdID);
  }

  getTeamByID(teamID: number): Observable<Team>
  {
    return this.http.get<Team>(environment.API_ENDPOINT + "/Team/" + teamID);
  }

  
  updateWedstrijd(wedstrijdID: number, wedstrijd: Wedstrijd): Observable<Wedstrijd>
  {
    return this.http.put<Wedstrijd>(environment.API_ENDPOINT + "/Wedstrijd/" + wedstrijdID, wedstrijd);
  }

  updateUser(userID: number ,user: User): Observable<User>
  {
    return this.http.put<User>(environment.API_ENDPOINT + "/User/" + userID, user);
  }

  getUserByID(UserID: number): Observable<User> {
    return this.http.get<User>(environment.API_ENDPOINT + "/user/" + UserID)
  }


}
