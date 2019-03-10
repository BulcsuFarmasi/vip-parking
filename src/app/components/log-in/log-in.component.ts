import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Guard } from 'src/app/models/guard';
import { GuardService } from 'src/app/services/guard.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  guards:Guard[]
  
  constructor(private guardService:GuardService, private router:Router) { }

  ngOnInit() {
    this.guards = this.guardService.getGuards(); 
  }

  logIn (id:number) {
      this.guardService.setCurrentGuard(id);
      this.router.navigate(['/dashboard'])
  }

}
