import { TestBed } from '@angular/core/testing';

import { TestiHideService } from './testi-hide.service';

describe('TestiHideService', () => {
  let service: TestiHideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestiHideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
