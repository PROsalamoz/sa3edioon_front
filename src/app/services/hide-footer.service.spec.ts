import { TestBed } from '@angular/core/testing';

import { HideFooterService } from './hide-footer.service';

describe('HideFooterService', () => {
  let service: HideFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HideFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
