import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HouseholdDetailsComponent} from './household-details.component';
import {MatButtonModule, MatIconModule} from "@angular/material";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {HouseholdsService, Simulation} from "../households.service";
import {RouterTestingModule} from "@angular/router/testing";
import {MockHouseholdsService} from "../households-list/households-list.component.spec";

describe('HouseholdDetailsComponent', () => {
  let component: HouseholdDetailsComponent;
  let fixture: ComponentFixture<HouseholdDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule, MatButtonModule, RouterTestingModule],
      declarations: [HouseholdDetailsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{provide: HouseholdsService, useClass: MockHouseholdsService}]
    })
      .compileComponents();
    const householdsService = TestBed.get(HouseholdsService);
    householdsService.selectedSimulation = {
      _id: {$oid: '1'},
      simName: '',
      type: '',
      resultLoadCurve: {} as any,
      availabilities: [],
      appliances: []
    } as Simulation;
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
