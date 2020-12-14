import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { AddUserComponent } from './user/add-user/add-user.component';
import { UserComponent } from './user/user/user.component';
import { TablesComponent } from './table/tables/tables.component';
import { PloegComponent } from './ploeg/ploeg/ploeg.component';
import { AddPloegComponent } from './ploeg/add-ploeg/add-ploeg.component';
import { EditPloegComponent } from './ploeg/edit-ploeg/edit-ploeg.component';
import { TeamComponent } from './team/team/team.component';
import { AddTeamComponent } from './team/add-team/add-team.component';
import { EditTeamComponent } from './team/edit-team/edit-team.component';
import { CompetitieComponent } from './competitie/competitie/competitie.component';
import { AddCompetitieComponent } from './competitie/add-competitie/add-competitie.component';
import { EditCompetitieComponent } from './competitie/edit-competitie/edit-competitie.component';
import { WedstrijdComponent } from './wedstrijd/wedstrijd/wedstrijd.component';
import { EditWedstrijdComponent } from './wedstrijd/edit-wedstrijd/edit-wedstrijd.component';
import { AddTableComponent } from './table/add-table/add-table.component';

@NgModule({
  declarations: [AddUserComponent,
    AdminComponent,
    UserComponent,
    PloegComponent,
    AddPloegComponent,
    EditPloegComponent,
    TablesComponent,
    TeamComponent,
    AddTeamComponent,
    EditTeamComponent,
    CompetitieComponent,
    AddCompetitieComponent,
    EditCompetitieComponent,
    WedstrijdComponent,
    EditWedstrijdComponent,
    AddTableComponent],

  imports: [
    CommonModule,
    SharedModule,
    FormsModule,]
})
export class AdminModule { }
