import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPloegComponent } from './add-ploeg.component';

describe('AddPloegComponent', () => {
  let component: AddPloegComponent;
  let fixture: ComponentFixture<AddPloegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPloegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPloegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
