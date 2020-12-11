import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPloegComponent } from './edit-ploeg.component';

describe('EditPloegComponent', () => {
  let component: EditPloegComponent;
  let fixture: ComponentFixture<EditPloegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPloegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPloegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
