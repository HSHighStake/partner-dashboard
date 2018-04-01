import { Currency, ICurrency } from '../currency';
import { Fact, IFact } from './fact';
import { FactWithDate } from './fact-with-date';
import { FactsWithDate, IFactsWithDate } from './facts-with-date';
import { Facts, IFacts } from './facts';
import { FusionChartPieChartData, FusionChart, LabelValue } from './fc-piechart';
import { data as mockData } from '../hs-profits-calculator-mock-default';

export interface IHSProfitsCalculatorData {
  fromDate(): Date;
  currency(): ICurrency;
  totalCostsEoy(): IFact;
  totalCostsEoyByCategory(): IFacts;
  costsEoyByDate(): IFactsWithDate;
  totalProfitsEoy(): IFact;
  totalProfitsEoyByCategory(): IFacts;
}

export class HsProfitsCalculatorData implements IHSProfitsCalculatorData {
  _fromDate: Date;
  _currency: ICurrency;
  _totalCostsEoy: IFact;
  _totalCostsEoyByCategory: IFacts;
  _costsEoyByDate: IFactsWithDate;
  _totalProfitsEoy: IFact;
  _totalProfitsEoyByCategory: IFacts;

  static fromFake(): HsProfitsCalculatorData {
    return HsProfitsCalculatorData.fromObject(mockData as any);
  }

  static fromObject(origin: {
      fromDate: string,
      currency: { code: string, symbol: string, name: string }
      totalCostsEoy: { category: string, amount: number },
      totalCostsEoyByCategory: [{ category: string, amount: number }],
      costsEoyByDate: [{ category: string, amount: number, date: Date }],
      totalProfitsEoy: { category: string, amount: number },
      totalProfitsEoyByCategory:  [{ category: string, amount: number }]
    }): HsProfitsCalculatorData {
    return new this(
      new Date(origin.fromDate),
      Currency.fromObject(origin.currency),
      Fact.fromObject(origin.totalCostsEoy),
      Facts.fromObject(origin.totalCostsEoyByCategory),
      FactsWithDate.fromObject(origin.costsEoyByDate),
      Fact.fromObject(origin.totalProfitsEoy),
      Facts.fromObject(origin.totalProfitsEoyByCategory)
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
      this.totalCostsEoyByCategory()
       .items().map(i => new LabelValue(i.category(), i.amount()))
    );
  }

  constructor(
    fromDate: Date,
    currency: ICurrency,
    totalCostsEoy: IFact,
    totalCostsEoyByCategory: IFacts,
    costsEoyByDate: IFactsWithDate,
    totalProfitsEoy: IFact,
    totalProfitsEoyByCategory: IFacts
  ) {
    if (fromDate == null) {
      throw new Error('fromDate is null');
    }
    this._fromDate = fromDate;

    if (currency == null) {
      throw new Error('currency is null');
    }
    this._currency = currency;

    if (totalCostsEoy == null) {
      throw new Error('totalCostsEoy is null');
    }
    this._totalCostsEoy = totalCostsEoy;

    if (totalCostsEoyByCategory == null) {
      throw new Error('totalCostsEoyByCategory is null');
    }
    this._totalCostsEoyByCategory = totalCostsEoyByCategory;

    if (costsEoyByDate == null) {
      throw new Error('costsEoyByDate is null');
    }
    this._costsEoyByDate = costsEoyByDate;

    if (totalProfitsEoy == null) {
      throw new Error('totalProfitsEoy is null');
    }
    this._totalProfitsEoy = totalProfitsEoy;

    if (totalProfitsEoyByCategory == null) {
      throw new Error('totalProfixEoyByCategory is null');
    }
    this._totalProfitsEoyByCategory = totalProfitsEoyByCategory;
  }

  fromDate(): Date {
    return this._fromDate;
  }
  currency(): ICurrency {
    return this._currency;
  }
  totalCostsEoy(): IFact {
    return this._totalCostsEoy;
  }
  totalCostsEoyByCategory(): IFacts {
    return this._totalCostsEoyByCategory;
  }
  costsEoyByDate(): IFactsWithDate {
    return this._costsEoyByDate;
  }
  totalProfitsEoy(): IFact {
    return this._totalProfitsEoy;
  }
  totalProfitsEoyByCategory(): IFacts {
    return this._totalProfitsEoyByCategory;
  }
}
