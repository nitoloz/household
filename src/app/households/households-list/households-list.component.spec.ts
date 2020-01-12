import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HouseholdsListComponent} from './households-list.component';
import {HouseholdsService} from "../households.service";
import {of} from "rxjs/internal/observable/of";
import {Router} from "@angular/router";
import {MockRouter} from "../can-activate-details.service.spec";
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";
import {MatTableModule} from "@angular/material";

export class MockHouseholdsService {
  getData() {
    return of([]);
  }
  getHouseholdTypeIcon(){
    return 'person';
  }
}

let householdsService: HouseholdsService;
let router: Router;
describe('HouseholdsListComponent', () => {
  let component: HouseholdsListComponent;
  let fixture: ComponentFixture<HouseholdsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule],
      declarations: [HouseholdsListComponent],
      providers: [
        {provide: HouseholdsService, useClass: MockHouseholdsService},
        {provide: Router, useClass: MockRouter}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();

    householdsService = TestBed.get(HouseholdsService);
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load simulations data', () => {
    spyOn(householdsService, 'getData').and.callThrough();
    component.ngOnInit();
    expect(householdsService.getData).toHaveBeenCalled();
  });

  it('should navigate to details page', () => {
    spyOn(router, 'navigate');
    component.showDetails({_id: {$oid: '1'}} as any);
    expect(router.navigate).toHaveBeenCalledWith(['/households', '1']);
  });

});
