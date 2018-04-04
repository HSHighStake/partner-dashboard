import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FusionChartPieChartData } from '../models/dto/fc-piechart';
import { HsProfitsCalculatorData } from '../models/dto/hs-profits-calculator-data';

@Injectable()
export class HsProfitsCalculatorService {
  data;
  constructor(private httpClient: HttpClient) {
  this.httpClient.post('/api/profit', {
    qualificationLevel: 3,
    year: 2018
  }).subscribe(data => this.data =  { ...data } ).add(data => console.log(data));
  }


  public fusionChartPieChartData(): FusionChartPieChartData {
  // return HsProfitsCalculatorData.fromFake().toFusionChartPieChartData();
  return HsProfitsCalculatorData.fromFake().toFusionChartPieChartData();
  }
}





