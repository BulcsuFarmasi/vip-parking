import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { Parking } from '../models/parking';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  activeParkings$:Subject<Parking[]>
  parkings:Parking[];
  parkCapacity:number = 10;
  
  constructor() { }

  addParking (parking:Parking) {}

  endParking () {}
  
  getActiveParkings () {

  }

  isBelowCapacity () {}
}
