import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Team } from 'src/app/models/team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teams: Team[];
  displayedColumns: string[] = ['ploeg name', 'player1 name', 'player2 name', 'deleteTeam'];
  dataSource: MatTableDataSource<Team>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  users: User[];

  constructor(private _teamService: AdminService, private route: Router) {
    this.ngOnInit();
   }

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams() {
    this._teamService.getTeams().subscribe(
      result => {
        this.teams = result;
        result.forEach(team => {
          this._teamService.getUser(team['player1ID']).subscribe(
            player1 => {
              team['player1'] = player1;
            }
          );
          if (team['player2ID'] != null) {
            this._teamService.getUser(team['player2ID']).subscribe(
              player2 => {
                team['player2'] = player2;
              }
            );
          }
          this._teamService.getPloegById(team['ploegID']).subscribe(
            ploeg => {
              team['ploeg'] = ploeg;
            }
          );
        });
        this.dataSource = new MatTableDataSource(this.teams);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  addTeam() {
    this.route.navigate(['/addTeam']);
  }

  deleteTeam(id) {
    this._teamService.deleteTeam(id).subscribe(
      result => this.getTeams()
    );
  }

  editTeam(id) {
    this.route.navigate(['/editTeam'], { queryParams: {id}});
  }

}
