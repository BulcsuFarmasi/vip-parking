import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { LogInComponent } from '../guard/components/log-in/log-in.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';




const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'log-in', component: LogInComponent },
  { path: '', pathMatch: 'full', redirectTo: '/log-in' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
