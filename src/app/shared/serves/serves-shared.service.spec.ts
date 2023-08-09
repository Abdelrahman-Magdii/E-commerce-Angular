import { TestBed } from '@angular/core/testing';

import { ServesSharedService } from './serves-shared.service';

describe('ServesSharedService', () => {
  let service: ServesSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServesSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
