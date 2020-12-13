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
import { TeamComponent } from './team/team/team.component';
import { AddTeamComponent } from './team/add-team/add-team.component';
import { EditTeamComponent } from './team/edit-team/edit-team.component';
import { TeamComponent } from './team/team/team.component';


const appRoutes: Routes = [
  { path: 'users', component: UserComponent},
  { path: 'addUser', component: AddUserComponent},
  { path: 'ploegen', component: PloegComponent},
  { path: 'addPloeg', component: AddPloegComponent},
  { path: 'editPloeg', component: EditPloegComponent},
  {path: 'addTable', component: AddTableComponent}
]

@NgModule({
  declarations: [AddUserComponent, AdminComponent, UserComponent, PloegComponent, AddPloegComponent, EditPloegComponent, TablesComponent, AddTableComponent, TeamComponent],
  { path: 'teams', component: TeamComponent},
  { path: 'addTeam', component: AddTeamComponent},
  { path: 'editTeam', component: EditTeamComponent}

@NgModule({
  declarations: [AddUserComponent, AdminComponent, UserComponent, PloegComponent, AddPloegComponent, EditPloegComponent, TablesComponent, TeamComponent, AddTeamComponent, EditTeamComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    SharedModule,
    FormsModule
  ]
})
export class AdminModule { }
