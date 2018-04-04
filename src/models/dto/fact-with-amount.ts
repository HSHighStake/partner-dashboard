import { IFact } from './fact';
import { Amount, IAmount } from './amount';

export interface IFactWithAmount extends IFact {
  amount(): IAmount;
}

export class FactWithAmount implements IFactWithAmount {
  _category: string;
  _amount: IAmount;

  static fromObject(origin: { category: string, amount: { amount: number, currency: { code: string, symbol: string } } }): IFactWithAmount {
    return new this(origin.category, Amount.fromObject(origin.amount));
  }

  constructor(category: string, amount: IAmount) {
    if (category == null) {
      throw new Error('category is null');
    }
    this._category = category;

    if (amount == null) {
      throw new Error('amount is null');
    }
    this._amount = amount;
  }

  public amount(): IAmount {
    return this._amount;
  }

  public category(): string {
    return this._category;
  }
}
