import { TestBed } from '@angular/core/testing';

import { HideHowComponentsService } from './hide-how-components.service';

describe('HideHowComponentsService', () => {
  let service: HideHowComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HideHowComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
