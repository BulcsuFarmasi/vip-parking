import { Injectable } from '@angular/core';

import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs';

import { Parking } from '../models/parking';
import { CashRegisterService } from './cash-register.service';
import { GuardService } from './guard.service';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  currentDay:Date;
  dailyStatsSubject:ReplaySubject<number[]> = new ReplaySubject();
  parkings:Parking[] = [];
  parkingHourlyRate = 500;
  stats:Map<Date,number[]> = new Map();
  activeParkings:Subject<Parking[]> = new BehaviorSubject(this.parkings);
  isBelowCapacitySubject:Subject<boolean> = new ReplaySubject();
  parkCapacity:number = 10;
  
  constructor(private cashRegisterService:CashRegisterService, private guardService:GuardService) { }

  addParking (parking:Parking) {
    
    parking.active = true;
    parking.id = this.parkings.length + 1;
    
    this.parkings.push(parking);

    this.activeParkings.next(this.filterActiveParkings());
    this.addToStats(parking);
    this.updateIsBelowCapacity();
  }

  addToStats (parking):void {
      const parkingCopy = Object.assign({}, parking);
      const parkingMidnight = new Date(parkingCopy);
      console.log(parking);
  }

  getDailyStats ():ReplaySubject<number[]> {
    return this.dailyStatsSubject;
  }

  getStats (day:Date) {
    this.currentDay = day;
    if(!this.stats.has(day)) {
      let dailyStats = [];
      for (let i = 0; i < 24; i++) {
        dailyStats.push(0)
      }
      this.stats.set(day, dailyStats);
    }
    return this.dailyStatsSubject.next(this.stats.get(day));
  }

  calculateParkingFee (parking:Parking) {
      const oneHour = 60 * 60 * 1000;
      const hoursParked = Math.ceil((parking.endTime.getTime() - parking.startTime.getTime()) / oneHour);

      const parkingFee = hoursParked * this.parkingHourlyRate;

      this.cashRegisterService.addToCashRegister(parkingFee);
      
      const commission = this.guardService.calculateCommission(parkingFee);
      this.guardService.addCommissionToCurrentGuard(commission);

  }

  endParking (id:number) {
      const index = this.parkings.findIndex(parking => parking.id === id);

      const parking = this.parkings[index]
      
      parking.active = false;
      parking.endTime = new Date();

      this.calculateParkingFee(parking);
      
      this.activeParkings.next(this.filterActiveParkings());
      this.updateIsBelowCapacity();
  }

  filterActiveParkings ():Parking[] {
    const activeParkings = this.parkings.filter(filter => filter.active);

    return activeParkings;
  }
  
  getActiveParkings () {
    return this.activeParkings;
  }

  getIsBelowCapacity () {
    this.updateIsBelowCapacity();
    return this.isBelowCapacitySubject;
  }

  updateIsBelowCapacity () {
    const activeParkings = this.filterActiveParkings();

    const isBelowCapacity = activeParkings.length < this.parkCapacity;

    this.isBelowCapacitySubject.next(isBelowCapacity);
  }

  isIncludingSearchExpression(searchExpression:string) {
    return (parking:Parking) => {
      if (parking.name.toLowerCase().includes(searchExpression) || parking.email.toLowerCase().includes(searchExpression) || 
          parking.licenceNumber.toLowerCase().includes(searchExpression)) {
        return true;
      }
    }
  }

  orderAscending (type:string):Parking[] {
    const parkings = this.filterActiveParkings();

    return parkings.sort((a, b) => {
      if (a[type] < b[type]) {
        return -1;
      }
      if (a[type] > b[type]) {
        return 1
      }
      return 0
    });
  }

  orderDescending (type:string):Parking[] {
    const parkings = this.filterActiveParkings();

    return parkings.sort((a, b) => {
      if (a[type] > b[type]) {
        return -1;
      }
      if (a[type] < b[type]) {
        return 1
      }
      return 0
    });
  }

  search (searchExpression:string):Parking[] {
    let parkings = this.filterActiveParkings();

    if (!searchExpression) {
      return parkings;
    }

    searchExpression = searchExpression.toLowerCase();

    return parkings.filter(this.isIncludingSearchExpression(searchExpression))
  }
}
