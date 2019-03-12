import { Component, OnInit } from '@angular/core';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Subscription } from 'rxjs';

import { ParkingService } from 'src/app/services/parking.service';

@Component({
  selector: 'parking-chart',
  templateUrl: './parking-chart.component.html',
  styleUrls: ['./parking-chart.component.scss']
})
export class ParkingChartComponent implements OnInit {

  currentDay:Date = new Date();

  chartOptions = {
    responsive: true
  }
  chartColors = [
    {backgroundColor: 'rgba(0,0,0,1)'}
  ]
  chartLabels = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
  chartType = 'bar'

  dailyStats:number[] = [];
  dailyStats$:Subscription

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  today:Date = new Date();
  
  constructor(private parkingService:ParkingService) { }

  ngOnInit():void {
    this.currentDay.setHours(0,0,0,0);
    this.today.setHours(0,0,0,0)
    this.dailyStats$ = this.parkingService.getDailyStats().subscribe(dailyStats => {
      this.dailyStats = dailyStats;
      console.log(dailyStats);
    })
    console.log(this.today, this.currentDay);
    this.parkingService.getStats(this.currentDay);
  }

  ngOnDestroy ():void {
    this.dailyStats$.unsubscribe();
  }

  decreaseDay () {
    this.currentDay = new Date(this.currentDay.setDate(this.currentDay.getDate() - 1));
    this.parkingService.getStats(this.currentDay);
  }

  increaseDay () {
    this.currentDay = new Date(this.currentDay.setDate(this.currentDay.getDate() + 1));
    this.parkingService.getStats(this.currentDay);
  }


}
