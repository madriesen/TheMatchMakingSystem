import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out',
              style({ height: 500, opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: 500, opacity: 1 }),
            animate('1s ease-in',
              style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class LandingpageComponent implements OnInit {

  selectedLocation: string;

  constructor() {
    this.selectedLocation = 'welcome';
  }


  showPage(location: string) {
    this.selectedLocation = location;
  }

  onChooseLocation(location: string) {
    this.selectedLocation = location
   
  }

  ngOnInit(): void {
  }

}
