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
import {LoginComponent} from './security/login/login.component';
import {RegisterComponent} from './security/register/register.component';
import { SecurityInterceptor } from './security/security.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChallengeComponent } from './challenge/challenge.component';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    LoginComponent,
    RegisterComponent,
    ChallengeComponent
    
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AdminModule,
    DashboardModule,
    FontAwesomeModule,
    SecurityModule,
    MatSelectModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true
    }],
  bootstrap: [AppComponent],
})
export class AppModule { }
