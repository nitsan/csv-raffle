import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { RaffleComponent } from './raffle/raffle.component';
import { RaffleGuard } from './raffle-guard.service';

const routes: Routes = [
  {
    path: '',
    component: RaffleComponent,
    canActivate: [RaffleGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  { path: '**', component: RaffleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
