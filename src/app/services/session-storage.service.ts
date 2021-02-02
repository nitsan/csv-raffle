import { Injectable } from '@angular/core';

// eslint-disable-next-line no-shadow
export enum SessionStorageKeys {
    adminForm = 'adminForm'
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
