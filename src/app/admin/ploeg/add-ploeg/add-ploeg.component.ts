import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { AdminService } from '../../admin.service';

import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-add-ploeg',
  templateUrl: './add-ploeg.component.html',
  styleUrls: ['./add-ploeg.component.scss']
})
export class AddPloegComponent implements OnInit {

  addPloegForm = this.fb.group({
    name: [''],
    companyName: [''],
    address: [''],
    town: [''],
    zipcode: ['']
  })

  users?: User[];
  selectedUser: User = null;

  constructor(private fb: FormBuilder, private _ploegService: AdminService, private route: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._ploegService.getUsers().subscribe(
      result => {
        this.users = result;
        console.log(this.users);
      }
    );
  }

  onSubmit() {
    this.addPloegForm.value["userID"] = this.selectedUser.userID;
    this._ploegService.addPloeg(this.addPloegForm.value).subscribe();
    this.route.navigate(['/ploegen']);
  }

}
