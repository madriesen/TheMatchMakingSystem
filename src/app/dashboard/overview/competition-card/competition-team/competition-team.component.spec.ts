import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionTeamComponent } from './competition-team.component';

describe('CompetitionTeamComponent', () => {
  let component: CompetitionTeamComponent;
  let fixture: ComponentFixture<CompetitionTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
