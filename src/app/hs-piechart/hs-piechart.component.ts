import { Component } from '@angular/core';
import { FusionChart, EmptyFusionChartPieChartData } from '../../models/dto/fc-piechart';
import { HsProfitsCalculatorData } from '../../models/dto/hs-profits-calculator-data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { HsProfitsCalculatorService } from '../hs-profits-calculator.service';
import { HsFormularDataService } from '../services/hs-formular-data.service';

@Component({
	selector: 'app-hs-piechart',
	templateUrl: './hs-piechart.component.html',
	styleUrls: ['./hs-piechart.component.css']
})
export class HsPiechartComponent {
	id = 'chart1';
	width = 800;
	height = 300;
	type = 'pie3d';
	dataFormat = 'json';
	dataSource;

	constructor(private dataService: HsProfitsCalculatorService, private formularDataService: HsFormularDataService) {
		this.dataSource;
		this.dataSource =
			new EmptyFusionChartPieChartData(
				new FusionChart(
				'Composition by income type',
				true,
				'€',
				'hulk-light',
				true
				  )
				);

		dataService
			.fusionChartPieChartData()
			.subscribe(e => this.dataSource.data = e.data)

		formularDataService.currentData.subscribe(data => {
			console.log('piechart component', data)
			// data handling
		})
	}
}
