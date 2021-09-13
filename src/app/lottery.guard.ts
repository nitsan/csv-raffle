import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RaffleService } from './services/raffle.service';

@Injectable({
  providedIn: 'root'
})
export class LotteryGuard implements CanActivate {

  constructor(private router: Router, private raffleService: RaffleService) {
  }

  canActivate(): boolean {
    if (this.raffleService.lotteryNames?.length) {
      return true;
    } else {
      this.router.navigate(['/admin']);
      return false;
    }
  }

}
