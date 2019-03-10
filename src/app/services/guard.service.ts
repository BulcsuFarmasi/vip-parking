import { Injectable } from '@angular/core';

import { Guard } from '../models/guard';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  currentGuard:Guard|null = null;
  guards:Guard[] = [
    {id: 1, name: 'Attila', commission: 0},
    {id: 2, name: 'Bálint', commission: 0},
    {id: 3, name: 'Dénes', commission: 0},
    {id: 4, name: 'Károly', commission: 0},
    {id: 5, name: 'Tamás', commission: 0}
  ]
  
  constructor() { }

  addCommissionToCurrentGuard (commission:number) {}
  
  getCurrentGuard () {}

  getGuards ():Guard[] {
    return this.guards;
  }

  setCurrentGuard (id:number) {
    let index = this.guards.findIndex(guard => {
      return guard.id === id;
    })

    this.currentGuard = this.guards[index];
  }

}
