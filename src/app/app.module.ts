import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common'
import localeHu from '@angular/common/locales/hu'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule } from 'primeng/calendar';

import { ChartsModule } from 'ng2-charts';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { QRCodeModule } from 'angularx-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { ParkingChartComponent } from './components/parking-chart/parking-chart.component';
import { CashRegisterComponent } from './components/cash-register/cash-register.component';
import { CommissionComponent } from './components/commission/commission.component';
import { ActiveParkingsComponent } from './components/active-parkings/active-parkings.component';
import { NewParkingComponent } from './components/new-parking/new-parking.component';
import { ParkingTicketComponent } from './components/parking-ticket/parking-ticket.component';
import { NewParkingFormComponent } from './components/new-parking-form/new-parking-form.component';

registerLocaleData(localeHu);

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    DashboardComponent,
    HeaderComponent,
    ParkingChartComponent,
    CashRegisterComponent,
    CommissionComponent,
    ActiveParkingsComponent,
    NewParkingComponent,
    ParkingTicketComponent,
    NewParkingFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ChartsModule,
    FontAwesomeModule,
    CalendarModule,
    QRCodeModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'hu' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
