import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CommissionComponent } from './components/commission/commission.component';
import { HeaderComponent } from './components/header/header.component';
import { LogInComponent } from './components/log-in/log-in.component';

@NgModule({
  declarations: [
    CommissionComponent,
    HeaderComponent,
    LogInComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommissionComponent,
    HeaderComponent,
    LogInComponent
  ]
})
export class GuardModule { }
