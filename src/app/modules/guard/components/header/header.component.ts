import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { Guard } from 'src/app/models/guard';
import { GuardService } from 'src/app/services/guard.service';

@Component({
  selector: 'vip-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  guard:Guard
  guard$:Subscription
  
  constructor(private guardService:GuardService, private router:Router) { }

  ngOnInit() {
    this.guard$ = this.guardService.getCurrentGuard().subscribe(guard => {
      this.guard = guard;
    });
  }

  ngOnDestroy () {
    this.guard$.unsubscribe();
  }

  logOut () {
    this.guardService.logOut();
    this.router.navigate(['/']);
  }

}
