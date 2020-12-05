import { Injectable } from '@angular/core';

export enum LocalStorageKeys {
    adminForm = 'adminForm'
}

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    constructor() {
    }

    public static setItem(key: LocalStorageKeys, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public static getItem(key: LocalStorageKeys): any {
        const localStorageItem = localStorage.getItem(key);
        return localStorageItem ? JSON.parse(localStorageItem) : null;
    }
}
