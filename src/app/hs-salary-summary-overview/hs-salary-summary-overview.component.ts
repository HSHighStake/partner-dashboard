import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-hs-salary-summary-overview',
	templateUrl: './hs-salary-summary-overview.component.html',
	styleUrls: ['./hs-salary-summary-overview.component.css']
})
export class HsSalarySummaryOverviewComponent implements OnInit {
	sum : number;
	constructor() {
		this.sum = 80000;
	}

	ngOnInit() {}
}
