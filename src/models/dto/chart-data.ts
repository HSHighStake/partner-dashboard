import { IHSProfitsCalculatorData } from './hs-profits-calculator-data';

export class PieChartData {
  _origin: IHSProfitsCalculatorData;
  constructor(value: IHSProfitsCalculatorData) {
    if (value == null) {
      throw new Error('value is null');
    }
    this._origin = value;
  }
}
