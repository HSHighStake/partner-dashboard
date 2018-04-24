import { Component, OnInit } from '@angular/core';

import { HsFormularDataService } from '../services/hs-formular-data.service';

@Component({
	selector: 'app-hs-salary-summary-overview',
	templateUrl: './hs-salary-summary-overview.component.html',
	styleUrls: ['./hs-salary-summary-overview.component.css']
})
export class HsSalarySummaryOverviewComponent implements OnInit {
	sum: number;
	constructor(private formularDataService: HsFormularDataService) {
		formularDataService.currentData.subscribe(data => {
			console.log('summary-overview component', data);
			// data handling
		});

		this.sum = 70000;
	}

	ngOnInit() {}
}
