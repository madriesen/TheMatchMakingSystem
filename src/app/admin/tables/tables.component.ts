import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/models/table.model';
import { TablesService } from 'src/app/services/tables.service';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Ploeg } from 'src/app/models/ploeg.model';




@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor(private _tablesService: TablesService, private _adminService: AdminService ,  private route: Router) { }
  displayedColumns: string[] = ['name', 'ploeg.companyName', 'ploeg.address', 'ploeg.zipCode', 'ploeg.town', 'user.firstName', 'ploeg.name', 'deleteTable']
  dataSource: MatTableDataSource<Table>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.getTables();
    this.getPloegen();
   
    
  }

  tables: Table[];
  getTables()
  {
    this._tablesService.getTables().subscribe(result => {
      this.tables = result;
      result.forEach(tafel => {
        console.log("tafelbeheerder: " + tafel['userID'])
        this._tablesService.getUser(tafel['userID']).subscribe(result2 => {
          tafel['user'] = result2
        });
        result.forEach(tafel => {
          this._tablesService.getPloegById(tafel['ploegID']).subscribe(result3 => {
            tafel['ploeg'] = result3
          });
        });
      });
        this.dataSource = new MatTableDataSource(this.tables);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log("tablebeheerder", this.tables)
    });

  
    
  }

  ploegen: Ploeg[];
  //get ploegen
  getPloegen()
  {
    this._tablesService.getPloegen().subscribe(result =>{
      this.ploegen = result;
    });
  }

  deleteTable(tableID: number)
  {
    //console.log("tableID: " + tableID)
    this._tablesService.deleteTable(tableID).subscribe()
  }



  navToAddTable()
  {
    this.route.navigate(["addTable"]);
  }

}
