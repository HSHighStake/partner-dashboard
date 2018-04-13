import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FusionChartPieChartData } from '../models/dto/fc-piechart';
import { HsProfitsCalculatorData } from '../models/dto/hs-profits-calculator-data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HsProfitsCalculatorService {
	data;
	chartData: FusionChartPieChartData;

	constructor(private httpClient: HttpClient) {}

	public summaryData() { // gets data using api
		return HsProfitsCalculatorData.fromFake().toSummary();
	}

	public fusionChartPieChartData() {
		return this.httpClient
			.post('/api/profit', {
				qualificationLevel: 3,
				year: 2018
			})
			.map(data =>
				HsProfitsCalculatorData.fromObject(
					data as any
				).toFusionChartPieChartData()
			);
	}
}
