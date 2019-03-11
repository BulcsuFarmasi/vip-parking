import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { GuardService } from './guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private guardService:GuardService, private router:Router) { }

  canActivate ():boolean {
    let canActivate = this.guardService.getCurrentGuard() !== null;
    if (!canActivate) {
      this.router.navigate(['/']);
    }
    return canActivate;
  }
}
