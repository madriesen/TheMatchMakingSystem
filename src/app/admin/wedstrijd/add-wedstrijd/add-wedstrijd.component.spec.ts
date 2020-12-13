import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWedstrijdComponent } from './add-wedstrijd.component';

describe('AddWedstrijdComponent', () => {
  let component: AddWedstrijdComponent;
  let fixture: ComponentFixture<AddWedstrijdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWedstrijdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWedstrijdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
