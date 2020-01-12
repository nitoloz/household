import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Availability} from "../../households.service";

@Component({
  selector: 'app-availabilities-table',
  templateUrl: './availabilities-table.component.html',
  styleUrls: ['./availabilities-table.component.scss', '../household-details.component.scss']
})
export class AvailabilitiesTableComponent implements OnInit {

  @Input() availabilities: Availability[];
  availabilityTableColumns = ['name', 'start', 'end', 'type'];

  constructor() {
  }

  ngOnInit() {
    this.availabilities.forEach(availability =>
      availability.activities = availability.activities.sort((a, b) =>
        new Date(a.start.$date).getTime() - new Date(b.start.$date).getTime()));
  }

}
