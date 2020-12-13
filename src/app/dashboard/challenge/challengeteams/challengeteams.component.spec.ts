import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeteamsComponent } from './challengeteams.component';

describe('ChallengeteamsComponent', () => {
  let component: ChallengeteamsComponent;
  let fixture: ComponentFixture<ChallengeteamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeteamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
