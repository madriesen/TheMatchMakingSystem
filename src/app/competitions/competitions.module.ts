import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCompetitionComponent } from './add-competition/add-competition.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { CompetitionComponent } from './competition/competition.component';



@NgModule({
  declarations: [AddCompetitionComponent, CompetitionsComponent, CompetitionComponent],
  imports: [
    CommonModule
  ]
})
export class CompetitionsModule { }
