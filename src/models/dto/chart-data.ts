import { IHSProfitCalculatorData } from './hs-profit-calculator-data';

export class PieChartData {
  _origin: IHSProfitCalculatorData;
  constructor(value: IHSProfitCalculatorData) {
    if (value == null) {
      throw new Error('value is null');
    }
    this._origin = value;
  }
}
