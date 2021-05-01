import { TestBed } from '@angular/core/testing';

import { HideAndDispalyService } from './hide-and-dispaly.service';

describe('HideAndDispalyService', () => {
  let service: HideAndDispalyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HideAndDispalyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
