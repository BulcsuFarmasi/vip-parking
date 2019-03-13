import { TestBed } from '@angular/core/testing';

import { ParkingStatsService } from './parking-stats.service';

describe('ParkingStatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParkingStatsService = TestBed.get(ParkingStatsService);
    expect(service).toBeTruthy();
  });
});
