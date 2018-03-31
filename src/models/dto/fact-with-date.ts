import { IFact } from './fact';

export interface IFactWithDate extends IFact {
  date(): Date;
}

export class FactWithDate implements IFactWithDate {
  _category: string;
  _amount: number;
  _date: Date;

  static fromIFact(origin: IFactWithDate): FactWithDate {
    return new this(origin.category(), origin.amount(), origin.date());
  }

  static fromObject(origin: { category: string, amount: number, date: Date }): FactWithDate {
    return new this(origin.category, origin.amount, origin.date);
  }

  constructor(category: string, amount: number, date: Date) {
    if (category == null) {
      throw new Error('category is null');
    }
    this._category = category;

    if (amount == null) {
      throw new Error('amount is null');
    }
    this._amount = amount;

    if (amount == null) {
      throw new Error('amount is null');
    }
    this._amount = amount;
  }

  public amount(): number {
    return this._amount;
  }

  public category(): string {
    return this._category;
  }

  public date(): Date {
    return this._date;
  }
}
