
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './overview/overview.component';


import { ChallengeComponent } from './challenge/challenge.component';
import { ChallengeteamsComponent } from './challenge/challengeteams/challengeteams.component';


import {TablesComponent} from '../admin/table/tables/tables.component';


const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'overview', component: OverviewComponent },

          { path: 'challenge', component: ChallengeComponent},
          { path:'challengeteams', component:ChallengeteamsComponent},
          {path: 'tables', component: TablesComponent },
          // { path: 'tables', 
          // component: TablesComponent ,
          // children : [
          //   {path: 'add', component: AddTableComponent}
          // ]},


          
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