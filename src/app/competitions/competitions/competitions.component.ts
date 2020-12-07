import { Component, OnInit } from '@angular/core';
import { Competition } from '../models/competition.model';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {
  Competitions:Competition[];


  constructor() {
    
   }

  ngOnInit(): void {
    this.Competitions= [(new Competition("test")),(new Competition("test")),(new Competition("test")),(new Competition("test")),(new Competition("test"))];
    console.log(this.Competitions)
  }

}
