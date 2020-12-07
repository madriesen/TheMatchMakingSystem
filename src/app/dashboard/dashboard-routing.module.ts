import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionComponent } from '../competitions/competition/competition.component';

import { DashboardComponent } from './dashboard.component';


const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'matches', component: CompetitionComponent },
          { path: 'tournaments', component: CompetitionComponent },
          { path: 'tables', component: CompetitionComponent }
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