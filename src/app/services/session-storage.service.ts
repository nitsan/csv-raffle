import { Injectable } from '@angular/core';

// eslint-disable-next-line no-shadow
export enum SessionStorageKeys {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  AdminForm = 'AdminForm',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  AllNames = 'totalNames',
}

@Injectable({
    providedIn: 'root'
})
export class SessionStorageService {
    constructor() {
    }

    public static setItem(key: SessionStorageKeys, value: any) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    public static getItem(key: SessionStorageKeys): any {
        const storageItem = sessionStorage.getItem(key);
        return storageItem ? JSON.parse(storageItem) : null;
    }
}
