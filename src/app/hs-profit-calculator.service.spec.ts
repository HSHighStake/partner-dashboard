import { TestBed, inject } from '@angular/core/testing';

import { HsProfitCalculatorService } from './hs-profit-calculator.service';

describe('HsProfitCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HsProfitCalculatorService]
    });
  });

  it('should be created', inject([HsProfitCalculatorService], (service: HsProfitCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
