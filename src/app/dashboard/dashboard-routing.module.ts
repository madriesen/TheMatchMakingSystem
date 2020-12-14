
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { TablesComponent } from '../admin/table/tables/tables.component';
import { UserComponent } from '../admin/user/user/user.component';
import { PloegComponent } from '../admin/ploeg/ploeg/ploeg.component';
import { AddPloegComponent } from '../admin/ploeg/add-ploeg/add-ploeg.component';
import { AddUserComponent } from '../admin/user/add-user/add-user.component';
import { AdminComponent } from '../admin/admin/admin.component';
import { EditPloegComponent } from '../admin/ploeg/edit-ploeg/edit-ploeg.component';
import { TeamComponent } from '../admin/team/team/team.component';
import { AddTeamComponent } from '../admin/team/add-team/add-team.component';
import { EditTeamComponent } from '../admin/team/edit-team/edit-team.component';
import { CompetitieComponent } from '../admin/competitie/competitie/competitie.component';
import { AddCompetitieComponent } from '../admin/competitie/add-competitie/add-competitie.component';
import { EditCompetitieComponent } from '../admin/competitie/edit-competitie/edit-competitie.component';
import { WedstrijdComponent } from '../admin/wedstrijd/wedstrijd/wedstrijd.component';
import { EditWedstrijdComponent } from '../admin/wedstrijd/edit-wedstrijd/edit-wedstrijd.component';
import { AddTableComponent } from '../admin/table/add-table/add-table.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { ChallengeteamsComponent } from './challenge/challengeteams/challengeteams.component';


const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'overview', component: OverviewComponent },
      {
        path: 'admin', children: [
          { path: 'users', component: UserComponent },
          { path: 'addUser', component: AddUserComponent },
          { path: 'ploegen', component: PloegComponent },
          { path: 'addPloeg', component: AddPloegComponent },
          { path: 'editPloeg', component: EditPloegComponent },
          { path: 'teams', component: TeamComponent },
          { path: 'addTeam', component: AddTeamComponent },
          { path: 'editTeam', component: EditTeamComponent },
          { path: 'competitions', component: CompetitieComponent },
          { path: 'addCompetition', component: AddCompetitieComponent },
          { path: 'editCompetition', component: EditCompetitieComponent },
          { path: 'wedstrijden', component: WedstrijdComponent },
          { path: 'editWedstrijd', component: EditWedstrijdComponent },
          { path: 'tables', component: TablesComponent },
          { path: 'addTable', component: AddTableComponent }
        ]
      },
      { path: 'challenge', component: ChallengeComponent},
      { path:'challengeteams', component:ChallengeteamsComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }