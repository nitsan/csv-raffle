import { Component } from '@angular/core';
import { CsvService } from '../csv.service';
import { names } from '../names';
import { LocalStorageKeys, LocalStorageService } from '../services/local-storage.service';
import { AdminForm } from '../models/admin.form.model';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.scss']
})
export class LotteryComponent {
  public winnerName = '???? ????';
  public names: Array<string>;
  public formData: AdminForm;

  constructor(private csvService: CsvService) {
    this.formData = LocalStorageService.getItem(LocalStorageKeys.adminForm);
    this.names = names;
  }

  getCsv() {
    const csv = this.csvService.getCsv();
    console.log(csv);
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
