import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-competition-team',
  templateUrl: './competition-team.component.html',
  styleUrls: ['./competition-team.component.scss']
})
export class CompetitionTeamComponent implements OnInit {
  @Input() nr;
  @Input() name;
  @Input() points;
  constructor() { }

  ngOnInit(): void {
  }

}
