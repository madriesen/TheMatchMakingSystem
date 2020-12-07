import { NgModule } from '@angular/core';

import { AddCompetitionComponent } from './add-competition/add-competition.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { CompetitionComponent } from './competition/competition.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  
  imports: [
    SharedModule
  ],
  declarations: [AddCompetitionComponent, CompetitionsComponent, CompetitionComponent],
  exports:[
    CompetitionsComponent
  ]
})
export class CompetitionsModule { }
