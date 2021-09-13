import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { RaffleComponent } from './raffle/raffle.component';
import { LotteryGuard } from './lottery.guard';

const routes: Routes = [
  {
    path: '',
    component: RaffleComponent,
    canActivate: [LotteryGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  { path: '**', component: RaffleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
