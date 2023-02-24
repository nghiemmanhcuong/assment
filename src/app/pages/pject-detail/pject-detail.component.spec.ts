import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PjectDetailComponent } from './pject-detail.component';

describe('PjectDetailComponent', () => {
  let component: PjectDetailComponent;
  let fixture: ComponentFixture<PjectDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PjectDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
