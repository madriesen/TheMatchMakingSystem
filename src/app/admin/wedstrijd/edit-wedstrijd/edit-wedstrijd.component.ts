import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Table } from 'src/app/models/table.model';
import { Team } from 'src/app/models/team.model';
import { Wedstrijd } from 'src/app/models/wedstrijd.model';
import { AdminService } from '../../admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-wedstrijd',
  templateUrl: './edit-wedstrijd.component.html',
  styleUrls: ['./edit-wedstrijd.component.scss']
})
export class EditWedstrijdComponent implements OnInit {

  editWedstrijdForm = this.fb.group({
    date: ['']
  })

  id: number = 0;
  wedstrijd: Wedstrijd = null;
  teamsPloeg1: Team[];
  teamsPloeg2: Team[];
  selectedTeam1: Team = null;
  selectedTeam2: Team = null;
  tables: Table[];
  selectedTable: Table = null;

  constructor(private fb: FormBuilder, private _wedstrijdService: AdminService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTables();
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      this.findWedstrijd();
    });
  }

  findWedstrijd() {
    this._wedstrijdService.getWedstrijdById(this.id).subscribe(
      result => {
        this.wedstrijd = result;
        this._wedstrijdService.getTeamById(this.wedstrijd['team1ID']).subscribe(
          team1 => {
            this._wedstrijdService.getTeamsByPloegID(team1.ploegID).subscribe(
              result => {
                this.teamsPloeg1 = result;
              }
            )
            this.wedstrijd['team1'] = team1;
            this.selectedTeam1 = team1;
        });
        this._wedstrijdService.getTeamById(this.wedstrijd['team2ID']).subscribe(
          team2 => {
            this._wedstrijdService.getTeamsByPloegID(team2.ploegID).subscribe(
              result => {
                this.teamsPloeg2 = result;
              }
            )
            this.wedstrijd['team2'] = team2;
            this.selectedTeam2 = team2;
        });
        this._wedstrijdService.getTableById(this.wedstrijd['tableID']).subscribe(
          table => {
            this.wedstrijd['table'] = table;
            this.selectedTable = table;
        });
      }
    );
  }

  getTeams(id) {
    
  }

  getTables() {
    this._wedstrijdService.getTables().subscribe(
      result => {
        this.tables = result;
      }
    )
  }

  onSubmit() {
    this.wedstrijd.team1ID = this.selectedTeam1.teamID;
    this.wedstrijd.team2ID = this.selectedTeam2.teamID;
    this.wedstrijd.tableID = this.selectedTable.tableID;
    console.log(this.wedstrijd);
    this._wedstrijdService.updateWedstrijd(this.id, this.wedstrijd).subscribe();
    this.route.navigate(['/wedstrijden'], { queryParams: {"wedstrijdUpdated": true}});
  }

}
