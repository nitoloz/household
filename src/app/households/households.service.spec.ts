import { TestBed } from '@angular/core/testing';

import { HouseholdsService } from './households.service';

describe('HouseholdsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HouseholdsService = TestBed.get(HouseholdsService);
    expect(service).toBeTruthy();
  });
});
