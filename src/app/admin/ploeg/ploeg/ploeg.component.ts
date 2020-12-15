import { Component, OnInit } from '@angular/core';
import { Ploeg } from 'src/app/models/ploeg.model';
import { User } from 'src/app/models/user.model';

import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ploeg',
  templateUrl: './ploeg.component.html',
  styleUrls: ['./ploeg.component.scss']
})
export class PloegComponent implements OnInit {
  ploegen: Ploeg[];
  displayedColumns: string[] = ['name', 'company name', 'address', 'town', 'zipcode', 'captain' , 'deletePloeg'];
  dataSource: MatTableDataSource<Ploeg>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private _ploegService: AdminService, private route: Router) {
    this.ngOnInit();
   }

  ngOnInit(): void {
    this.getPloegen();
  }

  getPloegen() {
    this._ploegService.getPloegen().subscribe(
      result => {
        this.ploegen = result;
        result.forEach(ploeg => {
         
          this._ploegService.getUser(ploeg['userID']).subscribe(
            result2 => {
              ploeg['user'] = result2;
            }
          );
        });
        this.dataSource = new MatTableDataSource(this.ploegen);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  addPloeg() {
    this.route.navigate(['/dashboard/admin/addPloeg']);
  }

  deletePloeg(id) {
    this._ploegService.deletePloeg(id).subscribe(
      result => this.getPloegen()
    );
  }

  editPloeg(id) {
    this.route.navigate(['/dashboard/admin/editPloeg'], { queryParams: {id}});
  }

}
