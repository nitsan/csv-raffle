import { TestBed } from '@angular/core/testing';

import { RaffleService } from './raffle.service';

describe('RaffleService', () => {
  let service: RaffleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaffleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
