import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { Competition } from '../models/competition.model';
import { Team } from '../models/team.model';
import { ChallengeService } from '../services/challenge.service';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {
  competitions: Competition[]
  constructor(private _serv: ChallengeService, private route: Router) { }

  ngOnInit(): void {
    this.getCompetitions();
    this.getTeams();
  }
  
  getCompetitions()
  {
    this._serv.getCompetitions().subscribe(result => {
      this.competitions = result; 

    });
  }
  chooseCompetition(id:number){
    console.log(id)

  }
  teams: Team[];
  getTeams()
  {
    this._serv.getMyTeams().subscribe(result => {
      this.teams = result; 
      this.teams.forEach(team =>
        this._serv.getCompetitionsTeamID(team.teamID).subscribe(wedstrijden => {
          team.wedstrijden=wedstrijden
          console.log(wedstrijden)
        })
        )
        console.log(this.teams)
    });
  }
}
