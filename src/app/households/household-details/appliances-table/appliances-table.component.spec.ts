import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliancesTableComponent } from './appliances-table.component';

describe('AppliancesTableComponent', () => {
  let component: AppliancesTableComponent;
  let fixture: ComponentFixture<AppliancesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliancesTableComponent ]
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
