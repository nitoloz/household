import {Component, OnInit} from '@angular/core';
import {HouseholdsService, Simulation} from '../households.service';

@Component({
  selector: 'app-household-details',
  templateUrl: './household-details.component.html',
  styleUrls: ['./household-details.component.scss']
})
export class HouseholdDetailsComponent implements OnInit {
  simulation: Simulation;

  constructor(public householdsService: HouseholdsService) {
  }

  ngOnInit() {
    this.simulation = this.householdsService.selectedSimulation;
  }

}
