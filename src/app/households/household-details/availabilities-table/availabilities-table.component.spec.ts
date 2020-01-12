import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilitiesTableComponent } from './availabilities-table.component';

describe('AvailabilitiesTableComponent', () => {
  let component: AvailabilitiesTableComponent;
  let fixture: ComponentFixture<AvailabilitiesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailabilitiesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilitiesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
