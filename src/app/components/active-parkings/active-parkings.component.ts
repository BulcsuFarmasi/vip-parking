import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { Parking } from 'src/app/models/parking';
import { ParkingService } from 'src/app/services/parking.service';

@Component({
  selector: 'active-parkings',
  templateUrl: './active-parkings.component.html',
  styleUrls: ['./active-parkings.component.scss']
})
export class ActiveParkingsComponent implements OnInit {

  parkings:Parking[] = [];
  parkings$:Subscription;
  
  constructor(private parkingService:ParkingService) { }

  ngOnInit() {
    this.parkings$ = this.parkingService.getActiveParkings().subscribe(parkings => {
      this.parkings = parkings;
    })
  }

  ngOnDestroy () {
    this.parkings$.unsubscribe();
  }

}
