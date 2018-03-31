export interface IFact {
  amount(): number;
  category(): string;
}

export class Fact {
  _category: string;
  _amount: number;

  static fromIFact(origin: IFact): Fact {
    return new this(origin.category(), origin.amount());
  }

  static fromObject(origin: { category: string, amount: number }): Fact {
    return new this(origin.category, origin.amount);
  }

  constructor(category: string, amount: number) {
    if (category == null) {
      throw new Error('category is null');
    }
    this._category = category;

    if (amount == null) {
      throw new Error('amount is null');
    }
    this._amount = amount;
  }

  public amount() {
    return this._amount;
  }

  public category() {
    return this._category;
  }
}
