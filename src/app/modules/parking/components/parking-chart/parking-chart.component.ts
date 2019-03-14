import { Component, OnInit } from '@angular/core';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Subscription } from 'rxjs';

import { ParkingStatsService } from 'src/app/services/parking-stats.service';

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

  dailyStats:[{data:number[], label:string}];
  dailyStats$:Subscription

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  today:Date = new Date();
  
  constructor(private parkingStatsService:ParkingStatsService) { }

  ngOnInit():void {
    this.currentDay.setHours(0,0,0,0);
    this.today.setHours(0,0,0,0);
    this.dailyStats$ = this.parkingStatsService.getDailyStats().subscribe(dailyStats => {
      this.dailyStats = [{data: dailyStats, label:"Autók száma"}];
    })
    this.parkingStatsService.getStats(this.currentDay);
  }

  ngOnDestroy ():void {
    this.dailyStats$.unsubscribe();
  }

  decreaseDay () {
    this.currentDay = new Date(this.currentDay.setDate(this.currentDay.getDate() - 1));
    this.parkingStatsService.getStats(this.currentDay);
  }

  increaseDay () {
    this.currentDay = new Date(this.currentDay.setDate(this.currentDay.getDate() + 1));
    this.parkingStatsService.getStats(this.currentDay);
  }


}
