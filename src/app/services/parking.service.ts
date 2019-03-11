import { Injectable } from '@angular/core';

import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs';

import { Parking } from '../models/parking';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  parkings:Parking[] = [];
  activeParkings:Subject<Parking[]> = new BehaviorSubject(this.parkings);
  isBelowCapacity$:Subject<boolean> = new ReplaySubject();
  parkCapacity:number = 10;
  
  constructor() { }

  addParking (parking:Parking) {
    
    parking.active = true;
    parking.id = this.parkings.length + 1;
    
    this.parkings.push(parking);

    this.activeParkings.next(this.filterActiveParkings());
  }

  endParking (id:number) {
      const index = this.parkings.findIndex(parking => parking.id === id);

      this.parkings[index].active = false;

      this.activeParkings.next(this.filterActiveParkings());
  }

  filterActiveParkings ():Parking[] {
    const activeParkings = this.parkings.filter(filter => filter.active);

    return activeParkings;
  }
  
  getActiveParkings () {
    return this.activeParkings;
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
