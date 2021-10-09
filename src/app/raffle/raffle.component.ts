import { Component } from '@angular/core';
import { SessionStorageKeys, SessionStorageService } from '../services/session-storage.service';
import { AdminForm } from '../models/admin.form.model';
import { RaffleService } from '../services/raffle.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-raffle',
  templateUrl: './raffle.component.html',
  styleUrls: ['./raffle.component.scss']
})
export class RaffleComponent {
  public winnerName = '???? ????';
  public readonly names: Array<string>;
  public readonly formData: AdminForm;

  constructor(private title: Title, private raffleService: RaffleService) {
    this.title.setTitle('Raffle!');
    this.formData = SessionStorageService.getItem(SessionStorageKeys.AdminForm);
    this.names = this.raffleService.raffleNames;
  }

  get logoUrl(): string {
    return this.formData?.logoUrl || 'assets/raffle-logo.png';
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
