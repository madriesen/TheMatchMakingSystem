import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionsComponent } from './competitions/competitions/competitions.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'competitions', component: CompetitionsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
