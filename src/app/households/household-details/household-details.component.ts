import {Component, OnInit} from '@angular/core';
import {Series} from '@swimlane/ngx-charts';
import {HouseholdsService, Simulation} from '../households.service';

@Component({
  selector: 'app-household-details',
  templateUrl: './household-details.component.html',
  styleUrls: ['./household-details.component.scss']
})
export class HouseholdDetailsComponent implements OnInit {

  activityTableColumns = ['name', 'start', 'end', 'type'];
  applianceTableColumns = ['name', 'inputOn', 'inputOff', 'duration'];

  simulation: Simulation;
  chartData: Series[];

  constructor(public householdsService: HouseholdsService) {
  }

  ngOnInit() {
    this.simulation = this.householdsService.selectedSimulation;
    this.simulation.availabilities.forEach(availability =>
      availability.activities = availability.activities.sort((a, b) =>
        new Date(a.start.$date).getTime() - new Date(b.start.$date).getTime()));

    this.chartData = [
      {name: 'Load Curve', series: []},
      {name: 'Lightning Load', series: []},
      {name: 'Occupancy', series: []},
      {name: 'Active Occupancy', series: []}
    ];

    this.simulation.resultLoadCurve.measurements.forEach(measurement => {
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
