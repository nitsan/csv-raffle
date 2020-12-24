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

    constructor() {
    }

    public setNames(file: Blob) {
        const reader = new FileReader();
        reader.onload = () => {
            this._lotteryNames = this.getArrayFromText(reader.result as string);
            console.log(this._lotteryNames);
        };
        reader.readAsText(file);
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
