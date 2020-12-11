import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competition-card',
  templateUrl: './competition-card.component.html',
  styleUrls: ['./competition-card.component.scss']
})
export class CompetitionCardComponent implements OnInit {

  private teams: Array<object> = [{ name: 'fc de kampioenen', points: 25 }, { name: 'de spuiters', points: 21 }, { name: 'de schellekens', points: 5 }];
  constructor() {
  }

  ngOnInit(): void {
  }

  getSortedTeams(): Array<object> {
    this.teams.sort((a, b) => {
      return b['points'] - a['points'];
    });

    return this.teams;
  }

}
