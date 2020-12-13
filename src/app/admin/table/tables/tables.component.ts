import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/models/table.model';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { AdminService } from '../../admin.service';
import { Ploeg } from 'src/app/models/ploeg.model';




@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor(private _tableService: AdminService ,  private route: Router) { }
  tables: Table[];
  displayedColumns: string[] = ['name', 'ploeg.companyName', 'ploeg.address', 'ploeg.zipCode', 'ploeg.town', 'user.firstName', 'ploeg.name', 'deleteTable']
  dataSource: MatTableDataSource<Table>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.getTables();
  }

  getTables(){
    this._tableService.getTables().subscribe(result => {
      this.tables = result;
      result.forEach(tafel => {
        this._tableService.getUser(tafel['userID']).subscribe(result2 => {
          tafel['user'] = result2
        });
        this._tableService.getPloegById(tafel['ploegID']).subscribe(result3 => {
          tafel['ploeg'] = result3
        });
      });
      this.dataSource = new MatTableDataSource(this.tables);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }

  addTable() {
    this.route.navigate(['/addTable']);
  }

  deleteTable(id) {
    this._tableService.deleteTable(id).subscribe(
      result => this.getTables()
    );
  }

}
