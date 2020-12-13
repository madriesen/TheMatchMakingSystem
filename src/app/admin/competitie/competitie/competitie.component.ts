import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Competition } from 'src/app/models/competition.model';
import { Ploeg } from 'src/app/models/ploeg.model';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-competitie',
  templateUrl: './competitie.component.html',
  styleUrls: ['./competitie.component.scss']
})
export class CompetitieComponent implements OnInit {
  competitions: Competition[];
  displayedColumns: string[] = ['name', 'ploeg1', 'ploeg2', 'deleteCompetition'];
  dataSource: MatTableDataSource<Competition>;
  ploegen: Ploeg[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _competitionService: AdminService, private route: Router) {
    this.ngOnInit();
   }

  ngOnInit(): void {
    this.getCompetitions();
  }

  getCompetitions() {
    this._competitionService.getCompetitions().subscribe(
      result => {
        this.competitions = result;
        result.forEach(competition => {
          this._competitionService.getPloegById(competition['ploeg1ID']).subscribe(
            ploeg1 => {
              competition['ploeg1'] = ploeg1;
          });
          this._competitionService.getPloegById(competition['ploeg2ID']).subscribe(
            ploeg2 => {
              competition['ploeg2'] = ploeg2;
          });
        });
        this.dataSource = new MatTableDataSource(this.competitions);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  addCompetition() {
    this.route.navigate(['/addCompetition']);
  }

  deleteCompetiton(id) {
    this._competitionService.deleteCompetition(id).subscribe(
      result => this.getCompetitions()
    );
  }

  editCompetition(id) {
    console.log(id);
    this.route.navigate(['/editCompetition'], { queryParams: {id}});
  }

}
