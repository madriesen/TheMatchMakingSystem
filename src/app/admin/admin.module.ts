import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AddUserComponent } from './user/add-user/add-user.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user/user.component';


const appRoutes: Routes = [
  { path: 'users', component: UserComponent},
  { path: 'addUser', component: AddUserComponent}
]

@NgModule({
  declarations: [AddUserComponent, AdminComponent, UserComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    SharedModule
  ]
})
export class AdminModule { }
