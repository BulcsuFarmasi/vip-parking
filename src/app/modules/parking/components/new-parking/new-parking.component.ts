import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { ParkingService } from 'src/app/services/parking.service';
import { Parking } from 'src/app/models/parking';

@Component({
  selector: 'new-parking',
  templateUrl: './new-parking.component.html',
  styleUrls: ['./new-parking.component.scss']
})
export class NewParkingComponent implements OnInit {

  formVisible:boolean;
  isBelowCapacity:boolean;
  isBelowCapacity$:Subscription;
  parking:Parking
  ticketVisible:boolean;
  
  constructor(private parkingService:ParkingService) { }

  ngOnInit ():void {
    this.isBelowCapacity$ = this.parkingService.getIsBelowCapacity().subscribe(isBelowCapacity => {
      this.isBelowCapacity = isBelowCapacity;
    })
  }

  ngOnDestroy ():void {
    this.isBelowCapacity$.unsubscribe();
  }

  hideTicket () {
    this.ticketVisible = false;
  }

  onFormSaved (parking:Parking) {
    this.parking = parking;
    this.formVisible = false;
    this.ticketVisible = true;
  }

  showForm () {
    this.formVisible = true;
  }



}
