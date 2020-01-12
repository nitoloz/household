import {TestBed} from '@angular/core/testing';

import {HouseholdsService, SIMULATION_TYPE} from './households.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('HouseholdsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [HouseholdsService]
  }));

  it('should be created', () => {
    const service: HouseholdsService = TestBed.get(HouseholdsService);
    expect(service).toBeTruthy();
  });

  it('should return correct household type icon', () => {
    const service: HouseholdsService = TestBed.get(HouseholdsService);
    expect(service.getHouseholdTypeIcon(SIMULATION_TYPE.HOUSEHOLD_SINGLE)).toBe('person');
    expect(service.getHouseholdTypeIcon(SIMULATION_TYPE.HOUSEHOLD_FAMILE)).toBe('people_alt');
  });
});
