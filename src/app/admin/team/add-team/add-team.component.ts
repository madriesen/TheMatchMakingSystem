import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Ploeg } from 'src/app/models/ploeg.model';
import { User } from 'src/app/models/user.model';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  addTeamForm = this.fb.group({
    name: ['']
  })

  users?: User[];
  selectedUser1: User = null;
  selectedUser2: User = null;
  ploegen: Ploeg[];
  selectedPloeg: Ploeg = null;
  isChecked: false;

  constructor(private fb: FormBuilder, private _teamService: AdminService, private route: Router) { }

  ngOnInit(): void {
    this.getUsers();
    this.getPloegen();
  }

  getUsers() {
    this._teamService.getUsers().subscribe(
      result => {
        this.users = result;
      }
    );
  }

  getPloegen() {
    this._teamService.getPloegen().subscribe(
      result => {
        this.ploegen = result;
      }
    )
  }

  onSubmit() {
    this.addTeamForm.value["player1ID"] = this.selectedUser1.userID;
    if (this.selectedUser1 != this.selectedUser2 && this.selectedUser2 != null) {
      this.addTeamForm.value["player2ID"] = this.selectedUser2.userID;
    }
    this.addTeamForm.value["ploegID"] = this.selectedPloeg.ploegID;
    this._teamService.addTeam(this.addTeamForm.value).subscribe();
    this.route.navigate(['/teams']);
  }

}
