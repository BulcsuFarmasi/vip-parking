import { Injectable } from '@angular/core';

import { Parking } from '../models/parking';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor() { }

  addParking (parking:Parking) {}

  endParking () {}
  
  getActiveParkings () {}
}
