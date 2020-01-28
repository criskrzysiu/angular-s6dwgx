import { Injectable } from '@angular/core';
import { Alert } from './alert';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class AlertsService {

  private _alerts$: BehaviorSubject<Alert[]> = new BehaviorSubject([{
    id: 1,
    name: 'alert 1'
  },
    {
      id: 2,
      name: 'alert 2'
   }]); 

  public get alerts$() {
    return this._alerts$.asObservable().pipe(delay(1000));
  }

  constructor() { }

}