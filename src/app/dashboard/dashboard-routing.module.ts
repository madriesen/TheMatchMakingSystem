
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionComponent } from '../competitions/competition/competition.component';

import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import {TablesComponent} from '../admin/tables/tables.component'
import { ChallengeComponent } from '../challenge/challenge.component';


const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'overview', component: OverviewComponent },
          { path: 'matches', component: CompetitionComponent },
          { path: 'tournaments', component: CompetitionComponent },

          
          { path: 'tables', component: TablesComponent },
          { path: 'competitions', component: CompetitionComponent },
          { path: 'challenge', component: ChallengeComponent }

          
        ]
      }
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