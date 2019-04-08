import { TestBed } from '@angular/core/testing';

import { ApiCallsService } from './api-calls.service';

describe('ApiCallsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiCallsService = TestBed.get(ApiCallsService);
    expect(service).toBeTruthy();
  });
});
