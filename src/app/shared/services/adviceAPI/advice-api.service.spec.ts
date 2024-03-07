import { TestBed } from '@angular/core/testing';

import { AdviceAPIService } from './advice-api.service';

describe('AdviceAPIService', () => {
  let service: AdviceAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdviceAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
