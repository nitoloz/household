import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoadCurveChartComponent} from './load-curve-chart.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {LineChartModule} from "@swimlane/ngx-charts";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('LoadCurveChartComponent', () => {
  let component: LoadCurveChartComponent;
  let fixture: ComponentFixture<LoadCurveChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LineChartModule, BrowserAnimationsModule],
      declarations: [LoadCurveChartComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadCurveChartComponent);
    component = fixture.componentInstance;
    component.measurements = [
      {
        "time": 0,
        "value": 2000,
        "lightingValue": 0,
        "activeOccupancy": 0,
        "occupancy": 1
      },
      {
        "time": 10,
        "value": 2000,
        "lightingValue": 0,
        "activeOccupancy": 0,
        "occupancy": 1
      },
      {
        "time": 20,
        "value": 2000,
        "lightingValue": 0,
        "activeOccupancy": 0,
        "occupancy": 1
      }];
    fixture.detectChanges();
  });

  it('should create chart series', () => {
    expect(component.chartData.length).toBe(4);
    expect(component.chartData.map(series => series.name)).toEqual(['Load Curve', 'Lightning Load', 'Occupancy', 'Active Occupancy']);
    expect(component.chartData.every(series => series.series.length === 3)).toBeTruthy();
  });
});
