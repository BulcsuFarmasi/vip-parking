import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Guard } from 'src/app/models/guard';
import { GuardService } from 'src/app/services/guard.service';

@Component({
  selector: 'vip-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  guard:Guard
  
  constructor(private guardService:GuardService, private router:Router) { }

  ngOnInit() {
    this.guard = this.guardService.getCurrentGuard();
  }

  logOut () {
    this.guardService.logOut();
    this.router.navigate(['/']);
  }

}
