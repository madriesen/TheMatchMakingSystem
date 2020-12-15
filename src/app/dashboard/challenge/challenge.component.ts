import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Competition } from 'src/app/models/competition.model';
import { ChallengeService } from 'src/app/services/challenge.service';



@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {
  competitions: Competition[]
  constructor(private _serv: ChallengeService, private route: Router) { }

  ngOnInit(): void {
    this.getCompetitions();
    
  }
  
  getCompetitions()
  {
    this._serv.getCompetitions().subscribe(result => {
      this.competitions = result; 

    });
  }
  chooseCompetition(id:number){
   
    this.route.navigate(['/dashboard/challengeteams'], { queryParams: {id}});
  }
  
}
