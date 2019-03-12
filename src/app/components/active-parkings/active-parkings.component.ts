import { Component, OnInit } from '@angular/core';

import { faChevronDown, faChevronUp, faSearch } from '@fortawesome/free-solid-svg-icons';

import { Subscription } from 'rxjs';

import { Parking } from 'src/app/models/parking';
import { ParkingService } from 'src/app/services/parking.service';

@Component({
  selector: 'active-parkings',
  templateUrl: './active-parkings.component.html',
  styleUrls: ['./active-parkings.component.scss']
})
export class ActiveParkingsComponent implements OnInit {

  
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faSearch = faSearch;
  parkings:Parking[] = [];
  parkings$:Subscription;
  searchExpression:string;
  
  constructor(private parkingService:ParkingService) { }

  ngOnInit() {
    this.parkings$ = this.parkingService.getActiveParkings().subscribe(parkings => {
      this.parkings = parkings;
    })
  }

  ngOnDestroy () {
    this.parkings$.unsubscribe();
  }

  endParking (id:number) {
    this.parkingService.endParking(id);
  }

  orderAscending (type:string):void {
    this.parkings = this.parkingService.orderAscending(type); 
  }

  orderDescending (type:string):void {
    this.parkings = this.parkingService.orderDescending(type); 
  }

  search ():void {
    this.parkings = this.parkingService.search(this.searchExpression); 
  }

}
