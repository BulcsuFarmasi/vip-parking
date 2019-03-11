import { Component, OnInit } from '@angular/core';

import { ParkingService } from 'src/app/services/parking.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'new-parking',
  templateUrl: './new-parking.component.html',
  styleUrls: ['./new-parking.component.scss']
})
export class NewParkingComponent implements OnInit {

  formVisible:boolean;
  isBelowCapacity:boolean;
  isBelowCapacity$:Subscription;
  
  constructor(private parkingService:ParkingService) { }

  ngOnInit ():void {
    this.isBelowCapacity$ = this.parkingService.getIsBelowCapacity().subscribe(isBelowCapacity => {
      this.isBelowCapacity = isBelowCapacity;
    })
  }

  ngOnDestroy ():void {
    this.isBelowCapacity$.unsubscribe();
  }

  hideForm () {
    this.formVisible = false;
  }

  showForm () {
    this.formVisible = true;
  }



}
