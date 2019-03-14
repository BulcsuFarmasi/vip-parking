import { Component, OnInit } from '@angular/core';

import { faChevronDown, faChevronUp, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

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
  faTimes = faTimes;
  parkings:Parking[] = [];
  parkings$:Subscription;
  searchExpression:string;
  
  constructor(private parkingService:ParkingService) { }

  ngOnInit():void {
    this.parkings$ = this.parkingService.getActiveParkings().subscribe(parkings => {
      this.parkings = parkings;
    })
  }

  ngOnDestroy ():void {
    this.parkings$.unsubscribe();
  }

  clearSearch ():void {
    this.searchExpression = '';
    this.search();
  }

  endParking (id:number):void {
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
