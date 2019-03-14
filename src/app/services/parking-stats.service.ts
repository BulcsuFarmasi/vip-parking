import { Injectable } from '@angular/core';

import { ReplaySubject } from 'rxjs';

import { Parking } from '../models/parking';
import { ParkingService } from './parking.service';

@Injectable({
  providedIn: 'root'
})
export class ParkingStatsService {

  activeParkings:Parking[];
  currentDay:Date;
  dailyStatsSubject:ReplaySubject<number[]> = new ReplaySubject();
  stats:Map<number,number[]> = new Map();
  today = new Date(new Date().setHours(0,0,0,0))

  constructor(private parkingService:ParkingService) {
    setInterval(() => {
      this.newHour();
    },60000);
    
    this.parkingService.getActiveParkings().subscribe(activeParkings => {
      this.activeParkings = activeParkings;
    })
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
    if(!this.stats.has(day.getTime())) {
      let dailyStats = [];
      for (let i = 0; i < 24; i++) {
        dailyStats.push(0);
      }
      this.stats.set(day.getTime(), dailyStats);
    }
    return this.dailyStatsSubject.next(this.stats.get(day.getTime()));
  }


  newHour () {
    const now = new Date();
    console.log(now);
    console.log(this.stats);
    if (now.getMinutes() === 0) {
      const dailyStat = this.stats.get(this.today.getTime());
      dailyStat[now.getHours()] = this.activeParkings.length;
      this.stats.set(this.today.getTime(), dailyStat);
      if (this.currentDay.getTime() === this.today.getTime()) {
        this.dailyStatsSubject.next(this.stats.get(this.today.getTime()));
      }
    }
  }
}