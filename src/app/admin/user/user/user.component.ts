import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/competitions/models/user.model';

import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[]
  displayedCollums: string[] = ['first name', 'last name', 'email', 'username', 'address', 'town', 'zipcode', 'birthday']
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _userService: AdminService, private route: Router) {
    this.ngOnInit();
   }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers().subscribe(
      result => {
        this.users = result;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  addUser() {
    this.route.navigate(['/addUser']);
  }

  deleteUser(id) {
    this._userService.deleteUser(id).subscribe(
      result => this.getUsers()
    );
  }

}
