/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LotteryService {
    private _lotteryNames: Array<string> = [];

    get lotteryNames(): Array<string> {
        return this._lotteryNames;
    }

    public setNames(file: Blob): Promise<void> {
        const reader = new FileReader();
        return new Promise((resolve => {
          reader.onload = () => {
            this._lotteryNames = this.getArrayFromText(reader.result as string);
            resolve();
          };
          reader.readAsText(file);
        }));
    }

    private getArrayFromText(text: string): Array<string> {
        const names: Array<string> = [];
        const lines = text.split('\n');
        lines.shift();
        lines.forEach((line: string) => {
            names.push(line.split(',')[0]);
        });

        return names;
    }
}
