import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HouseholdsListComponent} from "./households-list/households-list.component";
import {HouseholdDetailsComponent} from "./household-details/household-details.component";

const householdsRoutes: Routes = [
  { path: 'households',  component: HouseholdsListComponent },
  { path: 'households/:id', component: HouseholdDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(householdsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HouseholdsRoutingModule { }

