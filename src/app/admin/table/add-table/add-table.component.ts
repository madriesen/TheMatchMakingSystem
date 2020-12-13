import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Ploeg } from 'src/app/models/ploeg.model';
import { User } from 'src/app/models/user.model';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.scss']
})
export class AddTableComponent implements OnInit {

  addTableForm = this.fb.group({
    name: ['']
  })

  ploegen?: Ploeg[];
  selectedPloeg: Ploeg;
  users?: User[];
  selectedUser: User;

  constructor(private fb: FormBuilder, private _tableService: AdminService, private route: Router) { }

  ngOnInit(): void {
    this.getPloegen();
  }

  getPloegen() {
    this._tableService.getPloegen().subscribe(
      result => {
        this.ploegen = result;
      }
    );
  }

  getUsersByPloegID(id) {
    this._tableService.getUsersByPloegID(id).subscribe(
      result => {
        this.users = result;
      }
    );
  }

  onSubmit() {
    this.addTableForm.value["ploegID"] = this.selectedPloeg.ploegID;
    this.addTableForm.value['userID'] = this.selectedUser.userID;
    if (this.addTableForm.value['name'] != '') {
      this._tableService.addTable(this.addTableForm.value).subscribe();
      this.route.navigate(['/tables']);
    }
  }

}
