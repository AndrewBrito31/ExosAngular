import { TestBed } from '@angular/core/testing';

import { Ex3TransactionDataService } from './ex3transaction-data.service';

describe('TransactionDataService', () => {
  let service: Ex3TransactionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ex3TransactionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
