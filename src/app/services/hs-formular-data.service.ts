import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HsFormularDataService {

  private data = new Subject<FormField>();
  currentData = this.data.asObservable();

  formDataUpdate(field: FormField) {
    this.data.next(field);
  }
}

//TODO move to own file
export class FormField {
  constructor(public name: string, public value: string) {}
}
