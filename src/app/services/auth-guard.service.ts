import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { GuardService } from './guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private guardService:GuardService, private router:Router) { }

  canActivate ():Observable<boolean> {
    return this.guardService.getCurrentGuard()
        .pipe(
          switchMap((guard) => {
            if (guard !== null) {
              return of(true)
            } else {
              this.router.navigate(['/']);
              return of(false)
            }
        })
        )
  }
}
