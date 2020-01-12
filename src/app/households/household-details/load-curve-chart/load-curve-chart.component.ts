import {Component, Input, OnInit} from '@angular/core';
import {Series} from "@swimlane/ngx-charts";
import {Measurement} from "../../households.service";

@Component({
  selector: 'app-load-curve-chart',
  templateUrl: './load-curve-chart.component.html',
  styleUrls: ['./load-curve-chart.component.scss']
})
export class LoadCurveChartComponent implements OnInit {

  chartData: Series[];
  @Input() measurements: Measurement[];

  constructor() {
  }

  ngOnInit() {

    this.chartData = [
      {name: 'Load Curve', series: []},
      {name: 'Lightning Load', series: []},
      {name: 'Occupancy', series: []},
      {name: 'Active Occupancy', series: []}
    ];

    this.measurements.forEach(measurement => {
      ['value', 'lightingValue', 'occupancy', 'activeOccupancy'].forEach((value, index) => {
        this.chartData[index].series.push({
          name: measurement.time,
          value: measurement[value],
          extra: measurement
        });
      });
    })
  }

}
