import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashRegisterComponent } from './components/cash-register/cash-register.component';

@NgModule({
  declarations: [
    CashRegisterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CashRegisterComponent
  ]
})
export class CashRegisterModule { }
