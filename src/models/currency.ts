export interface ICurrency {
  name(): string;
  symbol(): string;
  isoCode(): string;
}

export class Currency implements ICurrency {
  _name: string;
  _symbol: string;
  _isoCode: string;
  static fromObject(origin: { name: string, symbol: string, code: string}): Currency {
    return new this(origin.name, origin.code, origin.symbol);
  }
  static fromICurrency(origin: ICurrency) {
    return new this(origin.name(), origin.isoCode(), origin.symbol());
  }

  constructor(name: string, isoCode: string, symbol: string) {
    if (name == null) {
      throw new Error('name is null');
    }
    this._name = name;

    if (isoCode == null) {
      throw new Error('isoCode is null');
    }
    this._isoCode = isoCode;

    if (symbol == null) {
      throw new Error('symbol is null');
    }
    this._symbol = symbol;
  }

  public name(): string {
    return this._name;
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
