import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LotteryComponent } from './lottery/lottery.component';
import { LotteryGuard } from './lottery.guard';

const routes: Routes = [
  {
    path: '',
    component: LotteryComponent,
    canActivate: [LotteryGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  { path: '**', component: LotteryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
