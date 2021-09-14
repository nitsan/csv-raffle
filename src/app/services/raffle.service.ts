/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { SessionStorageKeys, SessionStorageService } from './session-storage.service';

@Injectable({
    providedIn: 'root'
})
export class RaffleService {
    private _raffleNames: Array<string> = [];

    get raffleNames(): Array<string> {
        return this._raffleNames;
    }

    set raffleNames(value: Array<string>) {
      this._raffleNames = value;
      SessionStorageService.setItem(SessionStorageKeys.AllNames, this._raffleNames);
    }

    public setNames(file: Blob): Promise<void> {
        const reader = new FileReader();
        return new Promise((resolve => {
          reader.onload = () => {
            this._raffleNames = this.getArrayFromText(reader.result as string);
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
