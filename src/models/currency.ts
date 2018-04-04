export interface ICurrency {
  symbol(): string;
  isoCode(): string;
}

export class Currency implements ICurrency {
  _symbol: string;
  _isoCode: string;
  static fromObject(origin: { symbol: string, code: string}): Currency {
    return new this(origin.code, origin.symbol);
  }
  static fromICurrency(origin: ICurrency) {
    return new this(origin.isoCode(), origin.symbol());
  }

  constructor(isoCode: string, symbol: string) {

    if (isoCode == null) {
      throw new Error('isoCode is null');
    }
    this._isoCode = isoCode;

    if (symbol == null) {
      throw new Error('symbol is null');
    }
    this._symbol = symbol;
  }

  public symbol(): string {
    if (this._symbol.length !== 1) {
      throw new Error('symbol must have a length of 1');
    }
    return this._symbol;
  }

  public isoCode(): string {
    if (this._isoCode.length !== 3) {
      throw new Error('isoCode must have a length of 3');
    }
    return this._isoCode;
  }
}
