import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingStatsService {

  currentDay:Date;
  dailyStatsSubject:ReplaySubject<number[]> = new ReplaySubject();
  stats:Map<number,number[]> = new Map();

  constructor() { }

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
      if (i % 2 === 0) {
        dailyStats.push(10);
      } else {
        dailyStats.push(15);
      }
    }
    this.stats.set(day.getTime(), dailyStats);
  }
  return this.dailyStatsSubject.next(this.stats.get(day.getTime()));
}
}
