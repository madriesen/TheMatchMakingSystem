import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../app/shared/shared.module';
import { LandingpageComponent } from './landingpage/landingpage.component';

import { AdminModule } from './admin/admin.module';

import { DashboardModule } from './dashboard/dashboard.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {SecurityModule} from './security/security.module';
import {LoginComponent} from './security/login/login.component'




@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    LoginComponent
    
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AdminModule,
    DashboardModule,
    FontAwesomeModule,
    SecurityModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
