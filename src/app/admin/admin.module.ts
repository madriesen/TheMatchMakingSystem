import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AddUserComponent } from './user/add-user/add-user.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user/user.component';
import { TablesComponent } from './tables/tables.component';
import { PloegComponent } from './ploeg/ploeg/ploeg.component';
import { AddPloegComponent } from './ploeg/add-ploeg/add-ploeg.component';
import { EditPloegComponent } from './ploeg/edit-ploeg/edit-ploeg.component';
import { AddTableComponent } from './add-table/add-table.component';
import { CompetitieComponent } from './competitie/competitie/competitie.component';
import { AddCompetitieComponent } from './competitie/add-competitie/add-competitie.component';
import { EditCompetitieComponent } from './competitie/edit-competitie/edit-competitie.component';




const appRoutes: Routes = [
  { path: 'users', component: UserComponent},
  { path: 'addUser', component: AddUserComponent},
  { path: 'ploegen', component: PloegComponent},
  { path: 'addPloeg', component: AddPloegComponent},
  { path: 'editPloeg', component: EditPloegComponent},
  {path: 'addTable', component: AddTableComponent},
  { path: 'competitions', component: CompetitieComponent},
  { path: 'addCompetition', component: AddCompetitieComponent},
  { path: 'editCompetition', component: EditCompetitieComponent}
]

@NgModule({
  declarations: [AddUserComponent, AdminComponent, UserComponent, PloegComponent, AddPloegComponent, EditPloegComponent, TablesComponent,  CompetitieComponent, AddCompetitieComponent, EditCompetitieComponent],


  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    SharedModule,
    FormsModule
  ]
})
export class AdminModule { }
