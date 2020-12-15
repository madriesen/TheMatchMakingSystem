import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team.model';
import { User } from 'src/app/models/user.model';
import { Wedstrijd } from 'src/app/models/wedstrijd.model';
import { AuthenticatedUserService } from 'src/app/services/authenticated-user.service';
import { WedstrijdService } from 'src/app/services/wedstrijd.service';

@Component({
  selector: 'app-wedstrijden',
  templateUrl: './wedstrijden.component.html',
  styleUrls: ['./wedstrijden.component.scss']
}) 
export class WedstrijdenComponent implements OnInit {

  constructor(private _wedstrijdService: WedstrijdService, private _AuthenticatedUserService: AuthenticatedUserService) { }

 
  ploegID:  number;
  
  ngOnInit(): void {
    this.ploegID = Number(localStorage.getItem("ploegID"))
    this.getUserTeamsAndWedstrijden()
    console.log(this.wedstrijden)
 
  }
  panelOpenState = false;

 //get user teams
 userTeams: Team[]

 wedstrijden:  Array<Wedstrijd> = [];
 getUserTeamsAndWedstrijden()
 {
   return this._wedstrijdService.getUserTeams().subscribe( result =>{
     this.userTeams =  result
     //get ploeg object for each team
     result.forEach(team =>{
         this._wedstrijdService.getploegByID(team['ploegID']).subscribe(ploegResult =>{
           team['ploeg'] = ploegResult;
         });
     })
     //console.log(this.userTeams)
     //get wedstrijd for each team 
     result.map(team => {
       this._wedstrijdService.getUserWedstrijden(team.teamID).subscribe(result2 =>{
         // get wedstrijdType for each wedstrijd
         result2.forEach(w => {
           this._wedstrijdService.getWedstrijdTypeByID(w['wedstrijdTypeID']).subscribe(wedstrijdResult =>{
             w['wedstrijdType'] = wedstrijdResult
           })

           //get winnaar for each wedstrijden
           if(w.winnaarID)
           {
            this._wedstrijdService.getTeamByID(w.winnaarID).subscribe(ww =>{
              w['winnaar'] = ww
            })
           }
           
         })
         //get teams objects for each wedstrijd
         //team1
         result2.forEach(w =>{
           this._wedstrijdService.getTeamByID(w['team1ID']).subscribe(team1Result =>{
             w["team1"]  = team1Result;
             //get ploeg object for each team
              this._wedstrijdService.getploegByID(team1Result.ploegID).subscribe(p1Result =>{

                team1Result["ploeg"]  = p1Result;
             } )
           }); 
         })

         result2.forEach(w2 =>{
           this._wedstrijdService.getTeamByID(w2['team2ID']).subscribe(team2Result =>{
             w2["team2"]  = team2Result;
             //console.log(team2Result)
             this._wedstrijdService.getploegByID(team2Result.ploegID).subscribe(pResult =>
              {
               team2Result['ploeg'] = pResult
              })
             w2["team2"]  = team2Result;
             
           });
            
         })
         
         result2.map( item =>{
           //delete duplicates in wedstrijden
           if(!this.wedstrijden.find(i => i.wedstrijdID == item.wedstrijdID))
           {
             this.wedstrijden.push(item)
           }
           
         })
         //console.log(this.wedstrijden)
       });
     })
   })
 }

 team1: Team;
 team2: Team;
 
 player1: User;
 player2: User;
 wedstrijd: Wedstrijd;
 gewonnen(wedstrijd: Wedstrijd)
 {

    
    //check
    if(wedstrijd.team1.ploegID==this.ploegID)
    {
      
      wedstrijd.winnaarID = wedstrijd.team1ID
      //get winnaar object and ploeg of winnaar object
      this._wedstrijdService.getTeamByID(wedstrijd.winnaarID).subscribe(x => {
        this._wedstrijdService.getploegByID(x.ploegID).subscribe(x2 =>{
          x.ploeg = x2
        })

        wedstrijd.winnaar = x
      })
      console.log(wedstrijd)
      //update wedstrijd
      this._wedstrijdService.updateWedstrijd(wedstrijd.wedstrijdID, wedstrijd).subscribe();
      //increase ranking for won users
      //if player1 exists
      if(wedstrijd.team1.player1ID)
      {
        this._wedstrijdService.getUserByID(wedstrijd.team1.player1ID).subscribe( p =>{
          
          this.player1 = p
        })
        this.player1.ranking += 1
        console.log(this.player1)
        //update player
        this._wedstrijdService.updateUser(wedstrijd.team1.player1ID, this.player1).subscribe();
        
      }
    //player2
    if(wedstrijd.team1.player2ID)
    {
      this._wedstrijdService.getUserByID(wedstrijd.team1.player2ID).subscribe( p =>{
        
        this.player2 = p
      })
      this.player2.ranking += 1
      console.log(this.player2)
      //update player
      this._wedstrijdService.updateUser(wedstrijd.team1.player2ID, this.player2).subscribe();
      
    }

    //get won team
    // this.wedstrijd.winnaar = this.gewonnenTeam
    // this._wedstrijdService.getploegByID(this.gewonnenTeam.ploegID).subscribe( p =>{
    //   this.gewonnenTeam.ploeg = p;
    // })
   

  }
  else{
    wedstrijd.winnaarID = wedstrijd.team2ID
    //get winnaar object and ploeg of winnaar object
    this._wedstrijdService.getTeamByID(wedstrijd.winnaarID).subscribe(x => {
      this._wedstrijdService.getploegByID(x.ploegID).subscribe(x2 =>{
        x.ploeg = x2
      })

      wedstrijd.winnaar = x
    })
  
    this._wedstrijdService.updateWedstrijd(wedstrijd.wedstrijdID, wedstrijd).subscribe()

    //check if team2 == team of logged in user
  if(wedstrijd.team2.ploegID==this.ploegID){
    // wedstrijdWinnaarID = 
    wedstrijd.winnaarID = wedstrijd.team2ID
    //if player1
    if(wedstrijd.team2.player1ID){
      this._wedstrijdService.getUserByID(wedstrijd.team2.player1ID).subscribe( p =>{
       
        this.player1 = p
      })
      this.player1.ranking += 1
      console.log(this.player1)
      //update player1
      this._wedstrijdService.updateUser(wedstrijd.team2.player1ID, this.player1).subscribe();
      
    }
    //if player2
    if(wedstrijd.team2.player2ID){
      this._wedstrijdService.getUserByID(wedstrijd.team2.player2ID).subscribe( p =>{
       
        this.player2 = p
      })
      this.player2.ranking += 1
      console.log(this.player2)
      //update player2
      this._wedstrijdService.updateUser(wedstrijd.team2.player2ID, this.player2).subscribe(); 
    }

   
  }
 }
//end gewonnen
 }

}
