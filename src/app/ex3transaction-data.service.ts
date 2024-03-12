import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Ex3TransactionDataService {

  //dependecy injectio of HttpClientModule
  constructor(private http: HttpClient) { }

    // Method to fetch transactions from transactions.json using HttpClient
    getTransactions(): Observable<any[]> {
      return this.http.get<any[]>('assets/data/transactions.json');
    }
  
    // Method to fetch transaction details by id from id.json using HttpClient
    getTransactionById(id: number): Observable<any> {
      return this.http.get<any>(`assets/data/${id}.json`);
    }
}
