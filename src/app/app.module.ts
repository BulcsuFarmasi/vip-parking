import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common'
import localeHu from '@angular/common/locales/hu'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxPrintModule } from 'ngx-print';

import { AppComponent } from './components/app/app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { ParkingModule } from './modules/parking/parking.module';
import { CashRegisterModule } from './modules/cash-register/cash-register.module';
import { GuardModule } from './modules/guard/guard.module';

registerLocaleData(localeHu);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPrintModule, 
    AppRoutingModule,
    CashRegisterModule,
    GuardModule,
    ParkingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'hu' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
