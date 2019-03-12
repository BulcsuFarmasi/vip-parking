import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { CashRegister } from 'src/app/models/cash-register';
import { CashRegisterService } from 'src/app/services/cash-register.service';

@Component({
  selector: 'cash-register',
  templateUrl: './cash-register.component.html',
  styleUrls: ['./cash-register.component.scss']
})
export class CashRegisterComponent implements OnInit, OnDestroy {

  cashRegister:CashRegister
  cashRegister$:Subscription;
  
  constructor(private cashRegisterService:CashRegisterService) { }

  ngOnInit() {
    console.log(this.cashRegisterService.getCashRegister());
    this.cashRegister$ = this.cashRegisterService.getCashRegister().subscribe(cashRegister => {
      this.cashRegister = cashRegister;
    })
  }

  ngOnDestroy () {
    this.cashRegister$.unsubscribe();
  }

}
