import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Competition } from 'src/app/models/competition.model';
import { Table } from 'src/app/models/table.model';
import { Team } from 'src/app/models/team.model';
import { WedstrijdType } from 'src/app/models/wedstrijd-type.model';
import { Wedstrijd } from 'src/app/models/wedstrijd.model';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-wedstrijd',
  templateUrl: './wedstrijd.component.html',
  styleUrls: ['./wedstrijd.component.scss']
})
export class WedstrijdComponent implements OnInit {
  wedstrijden: Wedstrijd[];
  displayedColumns: string[] = ['date', 'type', 'tournooi', 'table', 'team1', 'team2', 'deleteWedstrijd'];
  dataSource: MatTableDataSource<Wedstrijd>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _wedstrijdService: AdminService, private route: Router) { }

  ngOnInit(): void {
  }

  getWedstrijden() {
    this._wedstrijdService.getWedstrijden().subscribe(
      result => {
        this.wedstrijden = result;
        result.forEach(wedstrijd => {
          this._wedstrijdService.getTeamWithPloeg(wedstrijd['team1ID']).subscribe(
            team1 => {
              wedstrijd['team1'] = team1;
          });
          this._wedstrijdService.getTeamWithPloeg(wedstrijd['team2ID']).subscribe(
            team2 => {
              wedstrijd['team2'] = team2;
          });
          this._wedstrijdService.getWedstrijdTypeById(wedstrijd['wedstrijdTypeID']).subscribe(
            type => {
              wedstrijd['WedstrijdType'] = type;
          });
          this._wedstrijdService.getTableById(wedstrijd['tableID']).subscribe(
            table => {
              wedstrijd['table'] = table;
          });
          this._wedstrijdService.getCompetitionById(wedstrijd['tournooiID']).subscribe(
            tournooi => {
              wedstrijd['tournooi'] = tournooi;
          });
          this._wedstrijdService.getTeamById(wedstrijd['winnaarID']).subscribe(
            winnaar => {
              wedstrijd['winnaar'] = winnaar;
          });
        });
        this.dataSource = new MatTableDataSource(this.wedstrijden);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  
  addWedstrijd() {
    this.route.navigate(['/addWedstrijd']);
  }

  deleteWedstrijd(id) {
    this._wedstrijdService.deleteWedstrijd(id).subscribe(
      result => this.getWedstrijden()
    );
  }

  editWedstrijd(id) {
    this.route.navigate(['/editWedstrijd'], { queryParams: {id}});
  }

}
