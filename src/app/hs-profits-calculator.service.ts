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

  public fusionChartPieChartData() {

	return this.httpClient
      .post('/api/profit', {
       qualificationLevel: 3,
        year: 2018
	  }).map(data => {
		  const mappedData = HsProfitsCalculatorData.fromObject(data as any).toFusionChartPieChartData();
		  console.log("Data:", mappedData.data);
		  return HsProfitsCalculatorData.fromObject(data as any).toFusionChartPieChartData()
	  });
	  //.lift(data => HsProfitsCalculatorData.fromObject(data as any).toFusionChartPieChartData());
	  /*
      .add(data => {
		//const result = HsProfitsCalculatorData.fromObject(data as any).toFusionChartPieChartData();
		console.log(data);
	  });*/
	/*return {
		chart: {
		  caption: 'Age profile of website visitors',
		  subcaption: 'Last Year',
		  startingangle: '120',
		  showlabels: '0',
		  showlegend: '1',
		  enablemultislicing: '0',
		  slicingdistance: '15',
		  showpercentvalues: '1',
		  showpercentintooltip: '0',
		  plottooltext:
			'Age group : $label Total visit : $datavalue',
		  theme: 'ocean'
		},
		data: [
		  {
			label: 'Teenage',
			value: '1250400'
		  },
		  {
			label: 'Adult',
			value: '1463300'
		  },
		  {
			label: 'Mid-age',
			value: '1050700'
		  },
		  {
			label: 'Senior',
			value: '491000'
		  }
		]
	  };*/
	/*return this.httpClient
      .post('/api/profit', {
       qualificationLevel: 3,
        year: 2018
      })
      .subscribe(data => (this.data = { ...data }))
      .add(data => {
        const result = HsProfitsCalculatorData.fromFake().toFusionChartPieChartData()
          .data;
        const myresult = {
          chart: {
            caption: 'Age profile of website visitors',
            subcaption: 'Last Year',
            startingangle: '120',
            showlabels: '0',
            showlegend: '1',
            enablemultislicing: '0',
            slicingdistance: '15',
            showpercentvalues: '1',
            showpercentintooltip: '0',
            plottooltext:
              'Age group : $label Total visit : $datavalue',
            theme: 'ocean'
          },
          data: [
            {
              label: 'Teenage',
              value: '1250400'
            },
            {
              label: 'Adult',
              value: '1463300'
            },
            {
              label: 'Mid-age',
              value: '1050700'
            },
            {
              label: 'Senior',
              value: '491000'
            }
          ]
        };
        console.log(JSON.stringify(result));
        return result;
      });*/
    /*return this.chartData;*/
    /*return HsProfitsCalculatorData
      .fromFake()
      .toFusionChartPieChartData();*/
  }
}
