import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-parking',
  templateUrl: './new-parking.component.html',
  styleUrls: ['./new-parking.component.scss']
})
export class NewParkingComponent implements OnInit {

  formVisible:boolean;
  isBelowCapacity:boolean;
  
  constructor() { }

  ngOnInit() {
  }



}
