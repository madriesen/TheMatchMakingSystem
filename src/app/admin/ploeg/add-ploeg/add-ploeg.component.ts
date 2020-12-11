import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { AdminService } from '../../admin.service';

import { Router } from '@angular/router';
import { User } from 'src/app/competitions/models/user.model';

@Component({
  selector: 'app-add-ploeg',
  templateUrl: './add-ploeg.component.html',
  styleUrls: ['./add-ploeg.component.scss']
})
export class AddPloegComponent implements OnInit {

  addPloegForm = this.fb.group({
    name: [''],
    companyName: [''],
    location: [''],
    UserID: ['']
  })

  users: User[];
  selectedUser: number = null;

  constructor(private fb: FormBuilder, private _ploegService: AdminService, private route: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._ploegService.getUsers().subscribe(
      result => {
        this.users = result;
      }
    );
  }

  onSubmit() {
    this.addPloegForm.value["UserID"] = this.selectedUser;
    this._ploegService.addPloeg(this.addPloegForm.value).subscribe();
    this.route.navigate(['/ploegen']);
  }

}
