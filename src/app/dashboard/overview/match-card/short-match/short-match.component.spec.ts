import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortMatchComponent } from './short-match.component';

describe('ShortMatchComponent', () => {
  let component: ShortMatchComponent;
  let fixture: ComponentFixture<ShortMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
