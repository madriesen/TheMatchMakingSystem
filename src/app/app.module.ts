import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompetitionsModule } from './competitions/competitions.module';


@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    CompetitionsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
