import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatTableModule
} from '@angular/material';
import {LineChartModule} from '@swimlane/ngx-charts';
import {CanActivateDetailsService} from './can-activate-details.service';
import {HouseholdDetailsComponent} from "./household-details/household-details.component";
import {HouseholdsListComponent} from "./households-list/households-list.component";
import {HouseholdsRoutingModule} from "./households-routing.module";
import {HouseholdsService} from './households.service';
import {AvailabilitiesTableComponent} from './household-details/availabilities-table/availabilities-table.component';
import {AppliancesTableComponent} from './household-details/appliances-table/appliances-table.component';
import {LoadCurveChartComponent} from './household-details/load-curve-chart/load-curve-chart.component';

@NgModule({
  declarations: [
    HouseholdsListComponent,
    HouseholdDetailsComponent,
    AvailabilitiesTableComponent,
    AppliancesTableComponent,
    LoadCurveChartComponent
  ],
  imports: [
    CommonModule,
    HouseholdsRoutingModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatDividerModule,
    LineChartModule
  ],
  providers: [HouseholdsService, CanActivateDetailsService]
})
export class HouseholdsModule {
}
