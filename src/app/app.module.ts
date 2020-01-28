import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { BladeModule } from "./blade/blade.module";
import { AlertsBladeComponent } from './alerts-blade/alerts-blade.component';
import { AlertDetailBladeComponent } from './alert-detail-blade/alert-detail-blade.component';
import { AlertsService } from './alerts.service';
import { SelectedAlertResolve } from './selected-alert.resolve';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BladeModule,
    RouterModule.forRoot([
      {
        path: 'alerts', component: AlertsBladeComponent, children: [
          {
            path: ':alertId',
            component: AlertDetailBladeComponent,
            resolve: {
              selectedAlert: SelectedAlertResolve
            }
          }
        ], 
      }

    ])],
  declarations: [AppComponent, HelloComponent, AlertsBladeComponent, AlertDetailBladeComponent],
  bootstrap: [AppComponent],
  providers: [AlertsService, SelectedAlertResolve]
})
export class AppModule {}
