import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AlertsService } from './alerts.service';
import { Alert, } from './alert';
import { map, switchMap, tap, first} from 'rxjs/operators';
import { throwError, of, empty  } from 'rxjs';

@Injectable()
export class SelectedAlertResolve implements Resolve<Alert> {
  constructor(private alertsService: AlertsService) { }

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('alertId');
    return this.alertsService.alerts$.pipe(
      first(),
      tap(()=> console.log('starting to resolve')),
      map((alerts: Alert[]) => alerts.find( (alert) => alert.id.toString() === id )), 
      switchMap(alert => {
        console.log(alert);
        if (!alert) {
          return empty();
        }
        return of(alert);
      })
    );
  }
}


