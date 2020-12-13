import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Ploeg } from 'src/app/models/ploeg.model';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-add-competitie',
  templateUrl: './add-competitie.component.html',
  styleUrls: ['./add-competitie.component.scss']
})
export class AddCompetitieComponent implements OnInit {

  addCompetitionForm = this.fb.group({
    name: ['']
  })

  ploegen?: Ploeg[];
  selectedPloeg1: Ploeg = null;
  selectedPloeg2: Ploeg = null;

  constructor(private fb: FormBuilder, private route: Router, private _competitionService: AdminService) { }

  ngOnInit(): void {
    this.getPloegen();
  }

  getPloegen() {
    this._competitionService.getPloegen().subscribe(
      result => {
        this.ploegen = result;
      }
    );
  }

  onSubmit() {
    this.addCompetitionForm.value["ploeg1ID"] = this.selectedPloeg1.ploegID;
    this.addCompetitionForm.value["ploeg2ID"] = this.selectedPloeg2.ploegID;
    this._competitionService.addCompetition(this.addCompetitionForm.value).subscribe();
    this.route.navigate(['/competitions']);
  }

}
