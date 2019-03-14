import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QRCodeModule } from 'angularx-qrcode'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ChartsModule } from 'ng2-charts';

import { CalendarModule } from 'primeng/calendar';

import { ActiveParkingsComponent } from './components/active-parkings/active-parkings.component';
import { NewParkingComponent } from './components/new-parking/new-parking.component';
import { NewParkingFormComponent } from './components/new-parking-form/new-parking-form.component';
import { ParkingChartComponent } from './components/parking-chart/parking-chart.component';
import { ParkingTicketComponent } from './components/parking-ticket/parking-ticket.component';

@NgModule({
  declarations: [
    ActiveParkingsComponent,
    NewParkingComponent,
    NewParkingFormComponent,
    ParkingChartComponent,
    ParkingTicketComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    ChartsModule,
    FontAwesomeModule,
    QRCodeModule
  ],
  exports: [
    ActiveParkingsComponent,
    NewParkingComponent,
    NewParkingFormComponent,
    ParkingChartComponent,
    ParkingTicketComponent
  ]
})
export class ParkingModule { }
