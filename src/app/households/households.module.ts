import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatDividerModule, MatExpansionModule, MatIconModule, MatTableModule} from '@angular/material';
import {LineChartModule} from '@swimlane/ngx-charts';
import {CanActivateDetailsService} from './can-activate-details.service';
import {HouseholdDetailsComponent} from "./household-details/household-details.component";
import {HouseholdsListComponent} from "./households-list/households-list.component";
import {HouseholdsRoutingModule} from "./households-routing.module";
import {HouseholdsService} from './households.service';

@NgModule({
  declarations: [
    HouseholdsListComponent,
    HouseholdDetailsComponent
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
export class HouseholdsModule {}
