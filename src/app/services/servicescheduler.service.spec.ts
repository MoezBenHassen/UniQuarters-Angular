import { TestBed } from '@angular/core/testing';

import { ServiceschedulerService } from './servicescheduler.service';

describe('ServiceschedulerService', () => {
  let service: ServiceschedulerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceschedulerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
