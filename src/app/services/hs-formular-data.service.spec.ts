import { TestBed, inject } from '@angular/core/testing';

import { HsFormularDataService } from './hs-formular-data.service';

describe('HsFormularDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HsFormularDataService]
    });
  });

  it('should be created', inject([HsFormularDataService], (service: HsFormularDataService) => {
    expect(service).toBeTruthy();
  }));
});
