import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navitem',
  templateUrl: './navitem.component.html',
  styleUrls: ['./navitem.component.scss']
})
export class NavitemComponent implements OnInit {
  @Input() icon;
  @Input() link
  @Input() text;
  @Input() click;

  constructor( ) { }

  ngOnInit(): void {
  }
  
}
