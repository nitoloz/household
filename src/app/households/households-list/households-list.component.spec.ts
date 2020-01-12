import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HouseholdsListComponent} from './households-list.component';
import {HouseholdsService} from "../households.service";
import {of} from "rxjs/internal/observable/of";

export class MockHouseholdsService {
  getData(){
    return of([]);
  }
}

describe('HouseholdsListComponent', () => {
  let component: HouseholdsListComponent;
  let fixture: ComponentFixture<HouseholdsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HouseholdsListComponent],
      providers: [
        {provide: HouseholdsService, useClass: MockHouseholdsService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
