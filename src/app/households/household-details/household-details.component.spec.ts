import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdDetailsComponent } from './household-details.component';

describe('HouseholdDetailsComponent', () => {
  let component: HouseholdDetailsComponent;
  let fixture: ComponentFixture<HouseholdDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseholdDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
