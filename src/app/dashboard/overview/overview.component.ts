import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
