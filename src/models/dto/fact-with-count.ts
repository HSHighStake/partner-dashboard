import { IFact } from './fact';

export interface IFactWithCount extends IFact {
  count(): number;
}

export class FactWithCount implements IFactWithCount {
  _category: string;
  _count: number;

  static fromIFact(origin: IFactWithCount): IFactWithCount {
    return new this(origin.category(), origin.count());
  }

  static fromObject(origin: { category: string, count: number }): IFactWithCount {
    return new this(origin.category, origin.count);
  }

  constructor(category: string, count: number) {
    if (category == null) {
      throw new Error('category is null');
    }
    this._category = category;
  }

  public count(): number {
    return this._count;
  }

  public category(): string {
    return this._category;
  }
}
