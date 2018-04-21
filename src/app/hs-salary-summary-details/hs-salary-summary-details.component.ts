import { Component, OnInit } from '@angular/core';
import { HsProfitsCalculatorService } from '../hs-profits-calculator.service';
import { CurrencyPipe } from '@angular/common';

import { HsSalarySummaryData } from '../../models/dto/hs-salary-summary-data';

@Component({
  selector: 'app-hs-salary-summary-details‚',
  templateUrl: './hs-salary-summary-details.component.html',
  styleUrls: ['./hs-salary-summary-details.component.css']
})
/*
 * @todo #3:45 Add this values from service as well
 */
export class HsSalarySummaryDetailsComponent implements OnInit {
  summary : HsSalarySummaryData;

  constructor(private dataService: HsProfitsCalculatorService) {
    this.summary = dataService.summaryData();
  }

  ngOnInit() {}
}
