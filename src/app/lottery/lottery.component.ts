import { Component } from '@angular/core';
import { LocalStorageKeys, LocalStorageService } from '../services/local-storage.service';
import { AdminForm } from '../models/admin.form.model';
import { LotteryService } from '../services/lottery.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.scss']
})
export class LotteryComponent {
  public winnerName = '???? ????';
  public readonly names: Array<string>;
  public readonly formData: AdminForm;

  constructor(private title: Title, private lotteryService: LotteryService) {
    this.title.setTitle('Lottery!');
    this.formData = LocalStorageService.getItem(LocalStorageKeys.adminForm);
    this.names = this.lotteryService.lotteryNames;
  }

  get logoUrl(): string {
    return this.formData?.logoUrl || 'assets/new-next-logo-white.svg';
  }

  random() {
    const cancel = setInterval(() => {
      const winner = Math.floor((Math.random() * this.names.length));
      if (this.names[winner]) {
        this.winnerName = this.names[winner];
      }
    }, 100);
    setTimeout(() => {
      clearInterval(cancel);
    }, 5000);
  }
}
