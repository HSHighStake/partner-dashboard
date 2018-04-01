import { Injectable } from '@angular/core';
import { FusionChartPieChartData } from '../models/dto/fc-piechart';
import { HsProfitsCalculatorData } from '../models/dto/hs-profits-calculator-data';

@Injectable()
export class HsProfitsCalculatorService {
  constructor() { }

  public fusionChartPieChartData(): FusionChartPieChartData {
    return HsProfitsCalculatorData.fromFake().toFusionChartPieChartData();
  }
}





