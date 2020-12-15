import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Team } from 'src/app/models/team.model';
import { Wedstrijd } from 'src/app/models/wedstrijd.model';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  wedstrijden: Wedstrijd[]=[];
  teams: Team[];

  displayedColumns: string[] = ['date', 'team1name', 'team2name', 'winnaar', 'tournooi', 'wedstrijdtype']
  dataSource: MatTableDataSource<Wedstrijd>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private _serv: HistoryService, private route: Router) { }

  ngOnInit(): void {
    this.getWedstrijden();
    
  }
  
  getWedstrijden()
  {
    this._serv.getMyTeams().subscribe(teams => {
      teams.forEach(team=>{
        this._serv.getWedstrijdByTeamID(team.teamID).pipe(finalize(()=>this.setDataSource())).subscribe(wedstrijden=>{
          wedstrijden.forEach(wedstrijd=>{
            if(wedstrijd.winnaarID!=null){
              this.wedstrijden.push(wedstrijd)
            }
          })
        })
      })

    });
  }
  setDataSource(){
    this.dataSource = new MatTableDataSource(this.wedstrijden);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.wedstrijden);
  }

}
