import { ICurrency, Currency } from '../currency';

export interface IAmount {
  currency(): ICurrency;
  amount(): number;
}

export class Amount implements IAmount {
  _value: number;
  _currency: ICurrency;

  static fromObject(origin: { amount: number, currency: { code: string, symbol: string } } ) {
    return new this(origin.amount, Currency.fromObject(origin.currency));
  }

  constructor(value: number, currency: ICurrency) {
    if (value == null) {
      throw new Error('value cannot be null');
    }
    this._value = value;

    if (currency == null) {
      throw new Error('currency cannot be null');
    }
    this._currency = currency;
  }

  public currency(): ICurrency {
    return this._currency;
  }
  public amount(): number {
    return this._value;
  }
}
