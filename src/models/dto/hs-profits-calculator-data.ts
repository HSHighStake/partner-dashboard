import { Currency, ICurrency } from '../currency';
import { IFact } from './fact';
import {
  FusionChartPieChartData,
  FusionChart,
  LabelValue
} from './fc-piechart';
import { data as mockData } from '../hs-profits-calculator-mock-default';
import { IFactWithAmount, FactWithAmount } from './fact-with-amount';
import { IFactWithCount, FactWithCount } from './fact-with-count';

export interface IHSProfitsCalculatorData {
  dayFacts(): IFactWithCount[];
  lossFacts(): IFactWithAmount[];
  netProfitFacts(): IFactWithAmount[];
  revenueFacts(): IFactWithAmount[];
}

export class HsProfitsCalculatorData implements IHSProfitsCalculatorData {
  _dayFacts: IFactWithCount[];
  _lossFacts: IFactWithAmount[];
  _netProfitFacts: IFactWithAmount[];
  _revenueFacts: IFactWithAmount[];

  static fromFake(): HsProfitsCalculatorData {
    // @todo #3 Figure out why we have to use 'as any' to prevent
    // errors on tlint and compiling. I guess there is a problem on matching //Array<> or {}[]?

    return HsProfitsCalculatorData.fromObject(mockData as any);
  }

  static fromObject(origin: {
    dayFacts: [{ category: string; count: number }];
    lossFacts: [
      {
        category: string;
        amount: {
          amount: number;
          currency: { code: string; symbol: string };
        };
      }
    ];
    netProfitFacts: [
      {
        category: string;
        amount: {
          amount: number;
          currency: { code: string; symbol: string };
        };
      }
    ];
    revenueFacts: [
      {
        category: string;
        amount: {
          amount: number;
          currency: { code: string; symbol: string };
        };
      }
    ];
    totalProfitsEoyByCategory: [{ category: string; amount: number }];
  }): HsProfitsCalculatorData {
    return new this(
      origin.dayFacts.map(e => FactWithCount.fromObject(e)),
      origin.lossFacts.map(e => FactWithAmount.fromObject(e)),
      origin.netProfitFacts.map(e => FactWithAmount.fromObject(e)),
      origin.revenueFacts.map(e => FactWithAmount.fromObject(e))
    );
  }

  public toFusionChartPieChartData(): FusionChartPieChartData {
    return new FusionChartPieChartData(
      new FusionChart(
        'Composition by income type',
        true,
        '€',
        'hulk-light',
        true
      ),
      this.revenueFacts().map(
        i => new LabelValue(i.category(), i.amount().amount())
      )
    );
  }

  constructor(
    dayFacts: IFactWithCount[],
    lossFacts: IFactWithAmount[],
    netProfitFacts: IFactWithAmount[],
    revenueFacts: IFactWithAmount[]
  ) {
    if (dayFacts == null) {
      throw new Error('dayFacts is null');
    }
    this._dayFacts = dayFacts;

    if (lossFacts == null) {
      throw new Error('lossFacts is null');
    }
    this._lossFacts = lossFacts;

    if (netProfitFacts == null) {
      throw new Error('netProfitFacts is null');
    }
    this._netProfitFacts = netProfitFacts;

    if (revenueFacts == null) {
      throw new Error('revenueFacts is null');
    }
    this._revenueFacts = revenueFacts;
  }

  dayFacts(): IFactWithCount[] {
    return this._dayFacts;
  }

  lossFacts(): IFactWithAmount[] {
    return this._lossFacts;
  }

  netProfitFacts(): IFactWithAmount[] {
    return this._netProfitFacts;
  }

  revenueFacts(): IFactWithAmount[] {
    return this._netProfitFacts;
  }
}
