
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import {TablesComponent} from '../admin/tables/tables.component';
import {AddTableComponent} from '../admin/add-table/add-table.component'


const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'overview', component: OverviewComponent },
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