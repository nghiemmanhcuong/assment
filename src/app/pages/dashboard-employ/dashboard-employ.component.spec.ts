import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEmployComponent } from './dashboard-employ.component';

describe('DashboardEmployComponent', () => {
  let component: DashboardEmployComponent;
  let fixture: ComponentFixture<DashboardEmployComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEmployComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardEmployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
