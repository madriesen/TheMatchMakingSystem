import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-table',
  templateUrl: './short-table.component.html',
  styleUrls: ['./short-table.component.scss']
})
export class ShortTableComponent implements OnInit {
@Input() table;
  constructor() { }

  ngOnInit(): void {
  }

}
