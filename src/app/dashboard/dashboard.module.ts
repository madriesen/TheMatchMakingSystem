import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavitemComponent } from './navigation/navitem/navitem.component';
import { CardComponent } from './overview/card/card.component';
import { ShortMatchComponent } from './overview/match-card/short-match/short-match.component';
import { MatchCardComponent } from './overview/match-card/match-card.component';
import { TablesCardComponent } from './overview/tables-card/tables-card.component';
import { ShortTableComponent } from './overview/tables-card/short-table/short-table.component';
import { CompetitionCardComponent } from './overview/competition-card/competition-card.component';
import { CompetitionTeamComponent } from './overview/competition-card/competition-team/competition-team.component';


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
    NavitemComponent,
    CardComponent,
    ShortMatchComponent,
    MatchCardComponent,
    TablesCardComponent,
    ShortTableComponent,
    CompetitionCardComponent,
    CompetitionTeamComponent
  ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
