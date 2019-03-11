import { Injectable } from '@angular/core';

import { Subject, ReplaySubject } from 'rxjs';

import { Parking } from '../models/parking';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  activeParkings$:Subject<Parking[]> = new Subject();
  isBelowCapacity$:Subject<boolean> = new ReplaySubject();
  parkings:Parking[] = [];
  parkCapacity:number = 10;
  
  constructor() { }

  addParking (parking:Parking) {
    
    parking.active = true;
    parking.latest = true;
    
    this.parkings.push(parking);
  }

  endParking () {}

  filterActiveParkings ():Parking[] {
    const activeParkings = this.parkings.filter(filter => filter.active);

    return activeParkings;
  }
  
  getActiveParkings () {
    return this.activeParkings$;
  }

  getIsBelowCapacity () {
    this.isBelowCapacity();
    return this.isBelowCapacity$;
  }

  isBelowCapacity () {
    const activeParkings = this.filterActiveParkings();

    const isBelowCapacity = activeParkings.length < this.parkCapacity;

    this.isBelowCapacity$.next(isBelowCapacity);
  }
}
