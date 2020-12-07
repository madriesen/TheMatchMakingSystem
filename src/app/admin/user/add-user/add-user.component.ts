import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { AdminService } from '../../admin.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    username: [''],
    password: [''],
    address: [''],
    town: [''],
    zipcode: [''],
    dob: [''],
    roleId: 1
  })

  constructor(private fb: FormBuilder, private _userService: AdminService, private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this._userService.addUser(this.addUserForm.value).subscribe();
    this.route.navigate(['/users']);
  }

}
