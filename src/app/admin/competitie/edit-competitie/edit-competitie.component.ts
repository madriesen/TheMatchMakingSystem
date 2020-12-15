import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Competition } from 'src/app/models/competition.model';
import { Ploeg } from 'src/app/models/ploeg.model';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-edit-competitie',
  templateUrl: './edit-competitie.component.html',
  styleUrls: ['./edit-competitie.component.scss']
})
export class EditCompetitieComponent implements OnInit {

  editCompetitionForm = this.fb.group({
    name: ['']
  })

  id: number = 0;
  competitie: Competition;
  ploegen?: Ploeg[];
  selectedPloeg1: Ploeg = null;
  selectedPloeg2: Ploeg = null;

  constructor(private fb: FormBuilder, private route: Router, private _competitionService: AdminService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPloegen();
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      this.findCompetition();
    });
  }

  findCompetition() {
    this._competitionService.getCompetitionById(this.id).subscribe(
      result => {
        this.competitie = result;
        this._competitionService.getPloegById(this.competitie['ploeg1ID']).subscribe(
          ploeg1 => {
            this.competitie['ploeg1'] = ploeg1;
            this.selectedPloeg1 = ploeg1;
          }
        );
        this._competitionService.getPloegById(this.competitie['ploeg2ID']).subscribe(
          ploeg2 => {
            this.competitie['ploeg2'] = ploeg2;
            this.selectedPloeg2 = ploeg2;
          }
        );
      }
    );
  }

  getPloegen() {
    this._competitionService.getPloegen().subscribe(
      result => {
        this.ploegen = result;
      }
    )
  }

  onSubmit() {
    if (this.selectedPloeg1.ploegID != this.selectedPloeg2.ploegID)
    {
      this.competitie.ploeg1ID = this.selectedPloeg1.ploegID;
      this.competitie.ploeg2ID = this.selectedPloeg2.ploegID;
    }
  
    this._competitionService.updateCompetition(this.id, this.competitie).subscribe();
    this.route.navigate(['/dashboard/admin/competitions'], { queryParams: {"competitionUpdated": true}});

  }

}
