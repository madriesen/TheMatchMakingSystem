import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AddUserComponent } from './user/add-user/add-user.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user/user.component';
import { PloegComponent } from './ploeg/ploeg/ploeg.component';
import { AddPloegComponent } from './ploeg/add-ploeg/add-ploeg.component';
import { EditPloegComponent } from './ploeg/edit-ploeg/edit-ploeg.component';


const appRoutes: Routes = [
  { path: 'users', component: UserComponent},
  { path: 'addUser', component: AddUserComponent},
  { path: 'ploegen', component: PloegComponent},
  { path: 'addPloeg', component: AddPloegComponent},
  { path: 'editPloeg', component: EditPloegComponent}
]

@NgModule({
  declarations: [AddUserComponent, AdminComponent, UserComponent, PloegComponent, AddPloegComponent, EditPloegComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    SharedModule
  ]
})
export class AdminModule { }
