import { TestBed } from '@angular/core/testing';

import { ServesService } from './serves.service';

describe('ServesService', () => {
  let service: ServesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
