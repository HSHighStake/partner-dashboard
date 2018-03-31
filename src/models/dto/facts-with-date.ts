import { FactWithDate, IFactWithDate } from './fact-with-date';

export interface IFactsWithDate {
  items(): IFactWithDate[];
}

export class FactsWithDate {
  _items: IFactWithDate[];

  static fromObject(origin: [ { amount: number, category: string, date: Date } ]) {
    return new this(origin.map(r => FactWithDate.fromObject(r)));
  }

  constructor(items: IFactWithDate[]) {
    if (items == null) {
      throw new Error('items is null');
    }
    this._items = items;
  }

  items(): IFactWithDate[] {
    return this._items;
  }
}
