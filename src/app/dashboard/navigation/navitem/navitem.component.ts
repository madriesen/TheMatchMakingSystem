import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navitem',
  templateUrl: './navitem.component.html',
  styleUrls: ['./navitem.component.scss']
})
export class NavitemComponent implements OnInit {
  @Input() icon;
  @Input() link
  @Input() text;

  constructor() { }

  ngOnInit(): void {
  }

}
