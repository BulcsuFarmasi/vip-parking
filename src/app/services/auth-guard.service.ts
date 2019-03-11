import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { GuardService } from './guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private guardService:GuardService) { }

  canActivate ():boolean {
    return this.guardService.getCurrentGuard !== null;
  }
}
