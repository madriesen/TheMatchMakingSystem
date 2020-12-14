import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Wedstrijd } from 'src/app/models/wedstrijd.model';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-wedstrijd',
  templateUrl: './wedstrijd.component.html',
  styleUrls: ['./wedstrijd.component.scss']
})
export class WedstrijdComponent implements OnInit {
  wedstrijden: Wedstrijd[];
  displayedColumns: string[] = ['date', 'type', 'tournooi', 'table', 'ploeg1', 'team1 name', 'team11', 'team12', 'ploeg2', 'team2 name', 'team21', 'team22', 'deleteWedstrijd'];
  dataSource: MatTableDataSource<Wedstrijd>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _wedstrijdService: AdminService, private route: Router) { }

  ngOnInit(): void {
    this.getWedstrijden();
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
        });
        console.log(this.wedstrijden);
        this.dataSource = new MatTableDataSource(this.wedstrijden);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  

  deleteWedstrijd(id) {
    this._wedstrijdService.deleteWedstrijd(id).subscribe(
      result => this.getWedstrijden()
    );
  }

  editWedstrijd(id) {
    this.route.navigate(['/dashboard/admin/editWedstrijd'], { queryParams: {id}});
  }

}
