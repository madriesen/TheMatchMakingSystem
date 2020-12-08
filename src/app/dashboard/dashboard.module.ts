import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavitemComponent } from './navigation/navitem/navitem.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    DashboardRoutingModule,
    FontAwesomeModule
  ],
  declarations: [
    DashboardComponent,
    OverviewComponent,
    NavigationComponent,
    NavitemComponent
  ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
