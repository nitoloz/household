import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HouseholdsService, Simulation} from './households.service';

@Injectable()
export class CanActivateDetailsService implements CanActivate {
  constructor(private householdsService: HouseholdsService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.householdsService.selectedSimulation && this.householdsService.selectedSimulation._id.$oid === route.params.id
      ? true
      : this.householdsService.getData().pipe(
        map((data: Simulation[]) => {
          const selectedSimulation = data.find(simulation => simulation._id.$oid === route.params.id);
          if (selectedSimulation) {
            this.householdsService.selectedSimulation = selectedSimulation;
            return true;
          } else {
            this.router.navigate(['/households']);
            return false;
          }
        }));
  }
}
