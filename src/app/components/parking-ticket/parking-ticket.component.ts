import { Component, OnInit, Input } from '@angular/core';

import { Parking } from 'src/app/models/parking';

@Component({
  selector: 'parking-ticket',
  templateUrl: './parking-ticket.component.html',
  styleUrls: ['./parking-ticket.component.scss']
})
export class ParkingTicketComponent implements OnInit {

  @Input('parking') parking:Parking
  
  constructor() { }

  ngOnInit() {
  }

}
