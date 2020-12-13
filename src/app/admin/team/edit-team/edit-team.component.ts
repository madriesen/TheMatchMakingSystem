import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/app/models/team.model';
import { User } from 'src/app/models/user.model';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss']
})
export class EditTeamComponent implements OnInit {

  id: number = 0;
  team: Team;
  users?: User[];
  selectedUser1: User = null;
  selectedUser2: User = null;
  isChecked: boolean = false;

  constructor(private _teamService: AdminService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      this.findTeam();
    });
  }

  findTeam() {
    this._teamService.getTeamById(this.id).subscribe(
      result => {
        this.team = result;
        this._teamService.getUser(this.team['player1ID']).subscribe(
          player1 => {
            this.team["player1"] = player1;
            this.selectedUser1 = player1;
          }
        );
        if (this.team['player2ID'] != null) {
          this.isChecked = true;
          this._teamService.getUser(this.team['player2ID']).subscribe(
            player2 => {
              this.team["player2"] = player2;
              this.selectedUser2 = player2;
            }
          );
        }
      }
    );
    this.getUsers();
  }

  getUsers() {
    this._teamService.getUsers().subscribe(
      result => {
        this.users = result;
      }
    );
  }


  onSubmit() {
    this.team.player1ID = this.selectedUser1.userID;
    if (this.selectedUser1 != this.selectedUser2 && this.selectedUser2 != null) {
      this.team.player2ID = this.selectedUser2.userID;
    }
    else {
      this.team.player2ID = null;
    }
    this._teamService.updateTeam(this.id, this.team).subscribe();
    this.route.navigate(['/teams'], { queryParams: {"teamUpdated": true }});
  }

}

