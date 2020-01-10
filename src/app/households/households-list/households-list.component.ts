import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HouseholdsService, Simulation, SIMULATION_TYPE} from '../households.service';

@Component({
  selector: 'app-households-list',
  templateUrl: './households-list.component.html',
  styleUrls: ['./households-list.component.scss']
})
export class HouseholdsListComponent implements OnInit {

  simulations: Simulation[];
  tableColumns = ['simName', 'householdType', 'appliancesCount', 'availabilitiesCount', 'resultLoadCurveCreationDate'];

  householdTypeIcon(simulationType) {
    return simulationType === SIMULATION_TYPE.HOUSEHOLD_SINGLE ? 'person' : 'people_alt';
  }

  constructor(private householdsService: HouseholdsService,
              private router: Router) {
  }

  ngOnInit() {
    this.householdsService.getData().subscribe(data => this.simulations = data);
  }

  showDetails(simulation: Simulation) {
    this.householdsService.selectedSimulation = simulation;
    this.router.navigate(['/households', simulation._id.$oid]);
  }

}
