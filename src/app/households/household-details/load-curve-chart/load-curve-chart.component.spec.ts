import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadCurveChartComponent } from './load-curve-chart.component';

describe('LoadCurveChartComponent', () => {
  let component: LoadCurveChartComponent;
  let fixture: ComponentFixture<LoadCurveChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadCurveChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadCurveChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
