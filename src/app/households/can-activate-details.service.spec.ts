import {TestBed} from '@angular/core/testing';

import {CanActivateDetailsService} from './can-activate-details.service';
import {HouseholdsService, Simulation} from "./households.service";
import {MockHouseholdsService} from "./households-list/households-list.component.spec";
import {ActivatedRoute, ActivatedRouteSnapshot, convertToParamMap, Router} from "@angular/router";
import {of} from "rxjs/internal/observable/of";
import {Observable} from "rxjs/internal/Observable";

export class MockRouter {
  navigate(path) {
  }
}

let householdsService: HouseholdsService;
let router: Router;
describe('CanActivateDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CanActivateDetailsService,
        {provide: HouseholdsService, useClass: MockHouseholdsService},
        {provide: Router, useClass: MockRouter}
      ]
    });
    householdsService = TestBed.get(HouseholdsService);
    router = TestBed.get(Router);
  });

  it('should return true if selectedSimulation is loaded', () => {
    householdsService.selectedSimulation = {
      _id: {$oid: '1'},
      simName: '',
      type: '',
      resultLoadCurve: {} as any,
      availabilities: [],
      appliances: []
    } as Simulation;
    const service: CanActivateDetailsService = TestBed.get(CanActivateDetailsService);
    expect(service.canActivate(<any>{params: {id: '1'}}, null)).toBeTruthy();
  });

  it('should load simulation if it`s missing', () => {
    spyOn(householdsService, 'getData').and.returnValue(of([{
      _id: {$oid: '1'},
      simName: '',
      type: '',
      resultLoadCurve: {} as any,
      availabilities: [],
      appliances: []
    }]));
    householdsService.selectedSimulation = {
      _id: {$oid: '2'},
      simName: '',
      type: '',
      resultLoadCurve: {} as any,
      availabilities: [],
      appliances: []
    } as Simulation;
    const service: CanActivateDetailsService = TestBed.get(CanActivateDetailsService);
    const resultObservable = service.canActivate(<any>{params: {id: '1'}}, null) as Observable<boolean>;
    resultObservable.subscribe((result: boolean) => {
      expect(result).toBeTruthy();
      expect(householdsService.selectedSimulation._id.$oid).toBe('1');
      expect(householdsService.getData).toHaveBeenCalled();
    })
  });

  it('should return false if there is no simulation with given id', () => {
    spyOn(router, 'navigate');
    spyOn(householdsService, 'getData').and.returnValue(of([{
      _id: {$oid: '3'},
      simName: '',
      type: '',
      resultLoadCurve: {} as any,
      availabilities: [],
      appliances: []
    }]));
    householdsService.selectedSimulation = {
      _id: {$oid: '2'},
      simName: '',
      type: '',
      resultLoadCurve: {} as any,
      availabilities: [],
      appliances: []
    } as Simulation;
    const service: CanActivateDetailsService = TestBed.get(CanActivateDetailsService);
    const resultObservable = service.canActivate(<any>{params: {id: '1'}}, null) as Observable<boolean>;
    resultObservable.subscribe((result: boolean) => {
      expect(result).toBeFalsy();
      expect(householdsService.selectedSimulation._id.$oid).toBe('2');
      expect(householdsService.getData).toHaveBeenCalled();
      expect(router.navigate).toHaveBeenCalledWith(['/households']);
    })
  });
});
