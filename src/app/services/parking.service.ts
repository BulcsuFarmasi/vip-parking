import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { Parking } from '../models/parking';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  activeParkings$:Subject<Parking[]> = new Subject();
  isBelowCapacity$:Subject<boolean> = new Subject();
  parkings:Parking[];
  parkCapacity:number = 10;
  
  constructor() { }

  addParking (parking:Parking) {}

  endParking () {}

  filterActiveParkings ():Parking[] {
    const activeParkings = this.parkings.filter(filter => {
      return filter.active;
    })

    return activeParkings;
  }
  
  getActiveParkings () {
    return this.activeParkings$;
  }

  getIsBelowCapacity () {
    return this.isBelowCapacity$;
  }

  isBelowCapacity () {
    const activeParkings = this.filterActiveParkings();

    const isBelowCapacity = activeParkings.length < this.parkCapacity;

    this.isBelowCapacity$.next(isBelowCapacity);
  }
}
