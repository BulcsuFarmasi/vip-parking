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

  addToStats (parking:Parking):void {
    const parkingStartTimeCopy = new Date(parking.startTime.getTime());
    let startDay = new Date(parkingStartTimeCopy.setHours(0,0,0,0));
    let day =  new Date(startDay.getTime());
    const now = new Date();
    
    while (day.getTime() <= this.today.getTime()) {
      
      let startHour = (day.getTime() === startDay.getTime()) ? parking.startTime.getHours() : 0;
      let endHour = (day.getTime() === this.today.getTime()) ? now.getHours() : 23;

      let dailyStats:number[];
      
      if (this.stats.has(day.getTime())) {
        dailyStats = this.stats.get(day.getTime());
        dailyStats = dailyStats.map((parkingNumber, hour) => {
          if (startHour <= hour && hour <= endHour) {
            console.log(hour);
            parkingNumber += 1;
          }
          return parkingNumber;
        })
        console.log(dailyStats);
      } else {
          dailyStats = [];
          for(let i = 0; i <= 23; i++){
            let parkingNumber = (startHour <= i && i <= endHour) ? 1 : 0;
            dailyStats.push(parkingNumber);
          }
      }
      console.log(dailyStats);
      this.stats.set(day.getTime(), dailyStats);
      console.log(this.stats.get(day.getTime()));
      day = new Date(day.setDate(day.getDate() + 1));
    };
    this.dailyStatsSubject.next(this.stats.get(this.currentDay.getTime()));
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