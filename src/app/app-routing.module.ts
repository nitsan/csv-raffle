import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LotteryComponent } from './lottery/lottery.component';

const routes: Routes = [
  {
    path: '',
    component: LotteryComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  { path: '**', component: LotteryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
