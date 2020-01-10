import { TestBed } from '@angular/core/testing';

import { CanActivateDetailsService } from './can-activate-details.service';

describe('CanActivateDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanActivateDetailsService = TestBed.get(CanActivateDetailsService);
    expect(service).toBeTruthy();
  });
});
