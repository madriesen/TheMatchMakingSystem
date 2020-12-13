import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompetitieComponent } from './edit-competitie.component';

describe('EditCompetitieComponent', () => {
  let component: EditCompetitieComponent;
  let fixture: ComponentFixture<EditCompetitieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCompetitieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompetitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
