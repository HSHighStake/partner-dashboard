import { Component } from '@angular/core';
import { FusionChart, EmptyFusionChartPieChartData } from '../../models/dto/fc-piechart';
import { HsProfitsCalculatorData } from '../../models/dto/hs-profits-calculator-data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { HsProfitsCalculatorService } from '../hs-profits-calculator.service';
import { HsFormularDataService } from '../services/hs-formular-data.service';
import { HsFormData } from '../../models/hs-form-data';

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
	dataSource: EmptyFusionChartPieChartData;
	hsFormData: HsFormData;

	constructor(private dataService: HsProfitsCalculatorService, private formularDataService: HsFormularDataService) {
		this.hsFormData = new HsFormData("java", "senior", "frontend");

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
			.fusionChartPieChartData(
				new Date().getFullYear().toString(),
				this.hsFormData.technology,
				this.hsFormData.level,
				this.hsFormData.type
			)
			.subscribe(e => this.dataSource.data = e.data)


		formularDataService.currentData.subscribe(data => {
			this.hsFormData[data.name] = data.value;

			dataService
			.fusionChartPieChartData(
				new Date().getFullYear().toString(),
				this.hsFormData.technology,
				this.hsFormData.level,
				this.hsFormData.type
			)
			.subscribe(e => this.dataSource.data = e.data)
		})
	}
}
