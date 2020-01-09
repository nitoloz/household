import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const STATIC_DATA_URL = 'assets/hous_test.json';

@Component({
  selector: 'app-households-list',
  templateUrl: './households-list.component.html',
  styleUrls: ['./households-list.component.scss']
})
export class HouseholdsListComponent implements OnInit {

  simulations: any[];
  tableColumns = ['simName', 'householdType', 'appliancesCount', 'availabilitiesCount', 'resultLoadCurveCreationDate'];

  householdTypeIcon(simulationType) {
    return simulationType === 'HOUSEHOLD_SINGLE' ? 'person' : 'people_alt';
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(STATIC_DATA_URL).subscribe((data: any) => {
      this.simulations = data;
    });
  }

}
