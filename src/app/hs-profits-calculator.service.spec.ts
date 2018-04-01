import { TestBed, inject } from '@angular/core/testing';

import { HsProfitsCalculatorService } from './hs-profits-calculator.service';

describe('HsProfitCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HsProfitsCalculatorService]
    });
  });

  it('should be created', inject([HsProfitsCalculatorService], (service: HsProfitsCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
