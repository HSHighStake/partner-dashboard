import { Component, OnInit } from '@angular/core';
import { HsProfitsCalculatorService } from '../hs-profits-calculator.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-hs-salary-summay',
  templateUrl: './hs-salary-summay.component.html',
  styleUrls: ['./hs-salary-summay.component.css']
})
/*
 * @todo #3:45 Add this values from service as well
 */
export class HsSalarySummayComponent implements OnInit {
  // summary = {
  //   'grossSalary': 32000 + 50000,
  //   'additionalSalaryCosts': (22 + 6 + 25 + 15) * 1000,
  //   'opportunity': (22 + 6) * 1000
  // };
  summary;

  constructor(private dataService: HsProfitsCalculatorService) {
    this.summary = dataService.summaryData();
  }

  ngOnInit() {}
}
