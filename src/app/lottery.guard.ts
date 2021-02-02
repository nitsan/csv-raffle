import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LotteryService } from './services/lottery.service';

@Injectable({
  providedIn: 'root'
})
export class LotteryGuard implements CanActivate {

  constructor(private router: Router, private lotteryService: LotteryService) {
  }

  canActivate(): boolean {
    if (this.lotteryService.lotteryNames?.length) {
      return true;
    } else {
      this.router.navigate(['/admin']);
      return false;
    }
  }

}
