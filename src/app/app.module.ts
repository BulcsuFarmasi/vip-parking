import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { ParkingChartComponent } from './components/parking-chart/parking-chart.component';
import { CashRegisterComponent } from './components/cash-register/cash-register.component';
import { CommisionComponent } from './components/commision/commision.component';
import { ActiveParkingsComponent } from './components/active-parkings/active-parkings.component';
import { NewParkingComponent } from './components/new-parking/new-parking.component';
import { ParkingTicketComponent } from './components/parking-ticket/parking-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    DashboardComponent,
    HeaderComponent,
    ParkingChartComponent,
    CashRegisterComponent,
    CommisionComponent,
    ActiveParkingsComponent,
    NewParkingComponent,
    ParkingTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
