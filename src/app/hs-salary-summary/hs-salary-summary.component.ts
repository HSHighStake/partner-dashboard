import { Component, OnInit } from '@angular/core';
import { HsProfitsCalculatorService } from '../hs-profits-calculator.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-hs-salary-summary',
  templateUrl: './hs-salary-summary.component.html',
  styleUrls: ['./hs-salary-summary.component.css']
})
/*
 * @todo #3:45 Add this values from service as well
 */
export class HsSalarySummayComponent implements OnInit {
  summary;

  constructor(private dataService: HsProfitsCalculatorService) {
    this.summary = dataService.summaryData();
  }

  ngOnInit() {}
}
