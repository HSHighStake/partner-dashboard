import { Fact, IFact } from './fact';

export interface IFacts {
  items(): IFact[];
}

export class Facts {
  _items: IFact[];

  static fromObject(origin: [ { amount: number, category: string } ]) {
    return new this(origin.map(r => Fact.fromObject(r)));
  }

  constructor(items: IFact[]) {
    if (items == null) {
      throw new Error('items is null');
    }
    this._items = items;
  }

  items(): IFact[] {
    return this._items;
  }
}
