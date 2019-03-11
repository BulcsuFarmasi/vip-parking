import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Parking } from 'src/app/models/parking';

@Component({
  selector: 'parking-ticket',
  templateUrl: './parking-ticket.component.html',
  styleUrls: ['./parking-ticket.component.scss']
})
export class ParkingTicketComponent implements OnInit {

  @Input('parking') parking:Parking;
  @Output('ticketClosed') ticketClosed:EventEmitter<boolean> = new EventEmitter();
  
  constructor() { }

  ngOnInit ():void {
  }

  hideTicket ():void {
    this.ticketClosed.emit(true);
  }

  printTicket ():void {
    this.hideTicket();
  }

}
