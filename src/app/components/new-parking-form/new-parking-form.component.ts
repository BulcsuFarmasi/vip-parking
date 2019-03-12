import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { hu } from './hu.locale';
import { Parking } from 'src/app/models/parking';
import { ParkingService } from 'src/app/services/parking.service';

@Component({
  selector: 'new-parking-form',
  templateUrl: './new-parking-form.component.html',
  styleUrls: ['./new-parking-form.component.scss']
})
export class NewParkingFormComponent implements OnInit {
  hu = hu;

  @Output('formSaved') formSaved:EventEmitter<Parking> = new EventEmitter();
  
  constructor(private parkingService:ParkingService) { }

  ngOnInit() {}

  saveParking (form:NgForm) {
      this.parkingService.addParking(form.value);
      this.formSaved.emit(form.value);
  }

}
