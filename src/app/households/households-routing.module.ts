import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CanActivateDetailsService} from './can-activate-details.service';
import {HouseholdDetailsComponent} from "./household-details/household-details.component";

import {HouseholdsListComponent} from "./households-list/households-list.component";

const householdsRoutes: Routes = [
  {path: 'households', component: HouseholdsListComponent},
  {path: 'households/:id', component: HouseholdDetailsComponent, canActivate: [CanActivateDetailsService]}
];

@NgModule({
  imports: [
    RouterModule.forChild(householdsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HouseholdsRoutingModule {}

