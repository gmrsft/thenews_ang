import { TestBed } from '@angular/core/testing';

import { ApiconsumService } from './apiconsum.service';

describe('ApiconsumService', () => {
  let service: ApiconsumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiconsumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
