import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompetitieComponent } from './add-competitie.component';

describe('AddCompetitieComponent', () => {
  let component: AddCompetitieComponent;
  let fixture: ComponentFixture<AddCompetitieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompetitieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompetitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
