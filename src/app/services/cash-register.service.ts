import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { CashRegister } from '../models/cash-register';

@Injectable({
  providedIn: 'root'
})
export class CashRegisterService {

  cashRegister:CashRegister = {
    amount: 0
  };
  cashRegisterSubject:BehaviorSubject<CashRegister> = new BehaviorSubject(this.cashRegister); 
  
  constructor() { }

  addToCashRegister (amount:number):void {
    this.cashRegister.amount += amount;
    this.cashRegisterSubject.next(this.cashRegister);
  }

  getCashRegister ():BehaviorSubject<CashRegister> {
    return this.cashRegisterSubject;
  }

}
