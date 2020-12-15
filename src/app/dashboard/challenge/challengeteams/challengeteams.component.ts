import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Competition } from 'src/app/models/competition.model';
import { Ploeg } from 'src/app/models/ploeg.model';
import { Table } from 'src/app/models/table.model';
import { Team } from 'src/app/models/team.model';
import { Wedstrijd } from 'src/app/models/wedstrijd.model';
import { ChallengeService } from 'src/app/services/challenge.service';


@Component({
  selector: 'app-challengeteams',
  templateUrl: './challengeteams.component.html',
  styleUrls: ['./challengeteams.component.scss']
})
export class ChallengeteamsComponent implements OnInit {
  addCompetitionForm = this.fb.group({
    
  })
  constructor(private fb: FormBuilder,private _serv: ChallengeService, private route: Router,private activatedRoute: ActivatedRoute) { }
  id : number;
  wedstrijd:Wedstrijd=null;
  
  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      this.getTeams();
      this.wedstrijd=new Wedstrijd(0,null,0,null,1,null,0,null,0,null,Number(this.id),null,0,null )
    });
  }
  tournooi:Competition;
  opponentPloeg:Ploeg=null;
  myTeams:Team[];
  myTables:Table[];
  getTeams(){
    this._serv.getPloegenOfTournooi(this.id).pipe(finalize(()=> this.getVals())).subscribe(result => {
      this.tournooi = result;
      this._serv.getTeamsofPloeg(this.tournooi.ploeg1ID).subscribe(teams1 => {
        this.tournooi.ploeg1.teams=teams1
      });
      this._serv.getTablesByPloegID(this.tournooi.ploeg1ID).subscribe(tables=>{
        this.myTables=tables;
      });
      this._serv.getTeamsofPloeg(this.tournooi.ploeg2ID).subscribe(teams2 => {
        this.tournooi.ploeg2.teams=teams2
      });
      this._serv.getTablesByPloegID(this.tournooi.ploeg2ID).subscribe(tables=>{
        tables.forEach(table=>{
          this.myTables.push(table);
        })
      });
    });
    
  }
  getVals(){
   
    if(this.tournooi.ploeg1.ploegID==Number(localStorage.getItem("ploegid"))){
      this.opponentPloeg= this.tournooi.ploeg2;
    }
    if(this.tournooi.ploeg2.ploegID==Number(localStorage.getItem("ploegid"))){
      this.opponentPloeg= this.tournooi.ploeg1;
    }
    this._serv.getMyTeams().subscribe(teams=>{
      this.myTeams=teams;
    });
    
  }
  onSubmit(){
    this.wedstrijd["winnaarID"]=null;
    this._serv.addWedstrijd(this.wedstrijd).subscribe(result=>{
      
    });
    this.route.navigate(['/dashboard/overview']);
  }
}
