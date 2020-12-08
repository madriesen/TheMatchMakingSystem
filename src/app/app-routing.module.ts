import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AddUserComponent } from './admin/user/add-user/add-user.component';
import { AdminComponent } from './admin/admin/admin.component';


const routes: Routes = [
  { path: '', component: LandingpageComponent },

  { path: 'admin', component: AdminComponent},

  {
    path: 'dashboard',
    redirectTo: '/dashboard/overview',
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
