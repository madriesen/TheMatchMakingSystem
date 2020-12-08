import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { AdminComponent } from './admin/admin.component';


const appRoutes: Routes = [
  { path: 'addUser', component: AddUserComponent}
]

@NgModule({
  declarations: [AddUserComponent, EditUserComponent, AdminComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AdminModule { }
