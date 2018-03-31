import { Currency, ICurrency } from '../currency';
import { Fact, IFact } from './fact';
import { FactWithDate } from './fact-with-date';
import { FactsWithDate, IFactsWithDate } from './facts-with-date';
import { Facts, IFacts } from './facts';

export interface IHSProfitCalculatorData {
  fromDate(): Date;
  currency(): ICurrency;
  totalCostsEoy(): IFact;
  totalCostsEoyByCategory(): IFacts;
  costsEoyByDate(): IFactsWithDate;
  totalProfitEoy(): IFact;
  totalProfitEoyByCategory(): IFacts;
}

export class HsProfitCalculatorData implements IHSProfitCalculatorData {
  _fromDate: Date;
  _currency: ICurrency;
  _totalCostsEoy: IFact;
  _totalCostsEoyByCategory: IFacts;
  _costsEoyByDate: IFactsWithDate;
  _totalProfitEoy: IFact;
  _totalProfitEoyByCategory: IFacts;

  static fromObject(origin: any): HsProfitCalculatorData {
    return new this(
      origin.fromDate,
      Currency.fromObject(origin.currency),
      Fact.fromObject(origin.totalCostsEoy),
      Facts.fromObject(origin.totalCostsEoyByCategory),
      FactsWithDate.fromObject(origin.costsEoyByDate),
      Fact.fromObject(origin.totalProfitEoy),
      Facts.fromObject(origin.totalProfitEoyByCategory)
    );
  }
  constructor(
    fromDate: Date,
    currency: ICurrency,
    totalCostsEoy: IFact,
    totalCostsEoyByCategory: IFacts,
    costsEoyByDate: IFactsWithDate,
    totalProfitEoy: IFact,
    totalProfitEoyByCategory: IFacts
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

    if (totalProfitEoy == null) {
      throw new Error('totalProfitEoy is null');
    }
    this._totalProfitEoy = totalProfitEoy;

    if (totalProfitEoyByCategory == null) {
      throw new Error('totalProfixEoyByCategory is null');
    }
    this._totalProfitEoyByCategory = totalProfitEoyByCategory;
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
  totalProfitEoy(): IFact {
    return this._totalProfitEoy;
  }
  totalProfitEoyByCategory(): IFacts {
    return this._totalProfitEoyByCategory;
  }
}
