import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesCardComponent } from './tables-card.component';

describe('TablesCardComponent', () => {
  let component: TablesCardComponent;
  let fixture: ComponentFixture<TablesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
