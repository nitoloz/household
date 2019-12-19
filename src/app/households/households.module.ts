import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HouseholdsRoutingModule} from "./households-routing.module";
import {HouseholdsListComponent} from "./households-list/households-list.component";
import {HouseholdDetailsComponent} from "./household-details/household-details.component";

@NgModule({
  declarations: [
    HouseholdsListComponent,
    HouseholdDetailsComponent,
  ],
  imports: [
    CommonModule,
    HouseholdsRoutingModule
  ]
})
export class HouseholdsModule { }
