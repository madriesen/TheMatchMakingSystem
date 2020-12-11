import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/models/table.model';
import { TablesService } from 'src/app/services/tables.service';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor(private _tablesService: TablesService, private route: Router) { }
  displayedColumns: string[] = ['name', 'company', '', 'address', 'postalcode', 'city', 'manager', 'ploeg', 'teams']
  dataSource: MatTableDataSource<Table>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.getTables()
    
  }

  tables: Table[]
  getTables()
  {
    this._tablesService.getTables().subscribe(result => {
      this.tables = result; 
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    console.log("tables", this.tables)
  }

}
