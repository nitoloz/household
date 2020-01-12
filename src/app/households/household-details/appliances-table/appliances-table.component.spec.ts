import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppliancesTableComponent} from './appliances-table.component';
import {MatTableModule} from "@angular/material";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('AppliancesTableComponent', () => {
  let component: AppliancesTableComponent;
  let fixture: ComponentFixture<AppliancesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule],
      declarations: [AppliancesTableComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliancesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
