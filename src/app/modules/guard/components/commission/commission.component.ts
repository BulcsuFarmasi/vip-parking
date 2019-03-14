import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { Guard } from 'src/app/models/guard';
import { GuardService } from 'src/app/services/guard.service';

@Component({
  selector: 'commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.scss']
})
export class CommissionComponent implements OnInit {

  guard:Guard
  guard$:Subscription
  
  constructor(private guardService:GuardService) { }

  ngOnInit() {
    this.guard$ = this.guardService.getCurrentGuard().subscribe(guard => {
      this.guard = guard;
    });
  }

  ngOnDestroy () {
    this.guard$.unsubscribe();
  }

}
