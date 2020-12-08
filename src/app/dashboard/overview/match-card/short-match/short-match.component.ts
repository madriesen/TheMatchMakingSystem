import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-match',
  templateUrl: './short-match.component.html',
  styleUrls: ['./short-match.component.scss']
})
export class ShortMatchComponent implements OnInit {
  @Input() home;
  @Input() time;
  @Input() away;
  @Input() myTeam;
  
  constructor() { }

  ngOnInit(): void {
  }

}
