import { Component, OnInit } from '@angular/core';
import { Foosballtable } from './../../../competitions/models/foosballtable.model';

@Component({
  selector: 'app-tables-card',
  templateUrl: './tables-card.component.html',
  styleUrls: ['./tables-card.component.scss']
})
export class TablesCardComponent implements OnInit {
  tables: Array<Foosballtable> = [];
  constructor() {
    this.tables.push({ name: 'Refter tafel 1', address: 'Grote straat 6', userID: 1, companyName: 'Bedrijf 1' });
    this.tables.push({ name: 'Refter tafel 2', address: 'Grote straat 6', userID: 1234, companyName: 'De stad' });
    this.tables.push({ name: 'Kelder tafel', address: 'Kleine baan 9', userID: 4321, companyName: ' het dorp' });
  }

  ngOnInit(): void {
  }

}
