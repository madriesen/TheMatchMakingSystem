import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { AdminService } from '../../admin.service';

import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Ploeg } from 'src/app/models/ploeg.model';

@Component({
  selector: 'app-edit-ploeg',
  templateUrl: './edit-ploeg.component.html',
  styleUrls: ['./edit-ploeg.component.scss']
})
export class EditPloegComponent implements OnInit {

  editPloegForm = this.fb.group({
    name: [''],
    companyName: [''],
    address: [''],
    town: [''],
    zipcode: [''],
    captain: ['']
  })

  id: number = 0;
  ploeg: Ploeg;
  users?: User[];
  selectedUser: User = null;

  constructor(private fb: FormBuilder, private _ploegService: AdminService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      this.findPloeg();
    });

    this.getUsers();
  }

  findPloeg(){
    this._ploegService.getPloegById(this.id).subscribe(
      result => {
        this.ploeg = result;
        this._ploegService.getUser(this.ploeg['userID']).subscribe(
          captain => {
            this.ploeg['user'] = captain;
            this.selectedUser = captain;
          }
        )
      }
    );
  }

  getUsers() {
    this._ploegService.getUsers().subscribe(
      result => {
        this.users = result;
      }
    );
  }

  onSubmit() {
    this.ploeg.userID = this.selectedUser.userID;
    this._ploegService.updatePloeg(this.id, this.ploeg).subscribe();
    this.route.navigate(['/dashboard/admin/ploegen'], { queryParams: {"ploegUpdated": true }});
  }

}