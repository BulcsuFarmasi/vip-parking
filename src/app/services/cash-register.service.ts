import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CashRegisterService {

  cashRegisterStatus:number = 0
  cashRegisterSubject:BehaviorSubject<number> = new BehaviorSubject(this.cashRegisterStatus); 
  
  constructor() { }

  addToCashRegister (amount:number):void {}

  getCashRegister () {}

}
