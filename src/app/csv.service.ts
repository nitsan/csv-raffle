import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CsvService {
  url = '';

  constructor(private http: HttpClient) {
  }

  getCsv() {
    return this.http.get(this.url, {responseType: 'text'}).subscribe();
  }
}
