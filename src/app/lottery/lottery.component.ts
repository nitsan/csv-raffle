import { Component } from '@angular/core';
import { CsvService } from '../csv.service';
import { names } from '../names';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.scss']
})
export class LotteryComponent {
  winnerName: string;
  names;

  constructor(private csvService: CsvService) {
    this.winnerName = '???? ????';
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
