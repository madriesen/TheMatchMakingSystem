import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    DashboardRoutingModule,
    FontAwesomeModule
  ],
  declarations: [
    DashboardComponent
  ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
