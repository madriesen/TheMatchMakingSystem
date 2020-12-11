import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PloegComponent } from './ploeg.component';

describe('PloegComponent', () => {
  let component: PloegComponent;
  let fixture: ComponentFixture<PloegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PloegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PloegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
