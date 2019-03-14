import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Guard } from '../models/guard';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  commissionRate:number = .1;
  currentGuard:Guard|null = null;
  currentGuardSubject:BehaviorSubject<Guard|null> = new BehaviorSubject(this.currentGuard);
  guards:Guard[] = [
    {id: 1, name: 'Attila', commission: 0},
    {id: 2, name: 'Bálint', commission: 0},
    {id: 3, name: 'Dénes', commission: 0},
    {id: 4, name: 'Károly', commission: 0},
    {id: 5, name: 'Tamás', commission: 0}
  ]
  
  constructor() { }

  addCommissionToCurrentGuard (commission:number) {
    this.currentGuard.commission += commission;
    this.currentGuardSubject.next(this.currentGuard)
  }

  calculateCommission (parkingFee:number) {
    return parkingFee * this.commissionRate;
  }
  
  getCurrentGuard ():BehaviorSubject<Guard|null> {
    return this.currentGuardSubject;
  }

  getGuards ():Guard[] {
    return this.guards;
  }

  logOut ():void {
    this.currentGuard = null;
    this.currentGuardSubject.next(this.currentGuard);
  }

  setCurrentGuard (id:number) {
    id = +id;
    let index = this.guards.findIndex(guard => {
      return guard.id === id;
    })

    this.currentGuard = this.guards[index];
    this.currentGuardSubject.next(this.currentGuard);
  }

}
