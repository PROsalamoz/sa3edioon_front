import { TestBed } from '@angular/core/testing';

import { DeliverypersonService } from './deliveryperson.service';

describe('DeliverypersonService', () => {
  let service: DeliverypersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliverypersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
