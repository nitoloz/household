import {Component, Input, OnInit} from '@angular/core';
import {Appliance, Availability} from "../../households.service";

@Component({
  selector: 'app-appliances-table',
  templateUrl: './appliances-table.component.html',
  styleUrls: ['./appliances-table.component.scss', '../household-details.component.scss']
})
export class AppliancesTableComponent implements OnInit {

  @Input() appliances: Appliance[];
  applianceTableColumns = ['name', 'inputOn', 'inputOff', 'duration'];

  constructor() { }

  ngOnInit() {
  }

}
