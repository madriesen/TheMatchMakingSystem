import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Ploeg } from 'src/app/models/ploeg.model';
import { Table } from 'src/app/models/table.model';
import { User } from 'src/app/models/user.model';
import { TablesService } from 'src/app/services/tables.service';
import { AdminService } from '../admin.service';



@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.scss']
})
export class AddTableComponent implements OnInit {

  constructor( private fb: FormBuilder,private _tableService: TablesService, private http: HttpClient, private route: Router, private _adminService: AdminService) { }

  ngOnInit(): void {
    this.getPloegen();
    this.getUsers();
    console.log(this.users)
  }

 
 
  //Add Form
  tableForm =  this.fb.group({
    name: new FormControl(''),
    userID: new FormControl(''),
    ploegID: new FormControl('')
  });


  submitted: boolean = false;
  toAddTable: Table = null;

  addTable()
  {
    this.submitted = true;
    this.toAddTable.name = this.tableForm.value['name'];
    this.toAddTable.userID = parseInt(this.tableForm.value['userID']);
    this.toAddTable.ploegID = parseInt(this.tableForm.value["ploegID"]);
    console.log( this.toAddTable)

    return this._tableService.addTable(this.toAddTable).subscribe()
    this.route.navigate(['/dashboard/tables']);
  }

  deleteTable(tableID: number)
  {
    return this._tableService.deleteTable(tableID)
  }

  ploegen: Ploeg[];
  //get ploegen
  getPloegen()
  {
    this._tableService.getPloegen().subscribe(result =>{
      this.ploegen = result;
    });
  }

  //get users
  users: User[]
  getUsers()
  {
    this._tableService.getUsers().subscribe(result => {
      this.users = result;
    });
  }
}
