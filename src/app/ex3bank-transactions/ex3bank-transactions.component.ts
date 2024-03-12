import { Component, OnInit } from '@angular/core';
import { Ex3TransactionDataService } from '../ex3transaction-data.service';


@Component({
  selector: 'app-ex3bank-transactions',
  templateUrl: './ex3bank-transactions.component.html',
  styleUrl: './ex3bank-transactions.component.css'
})
export class Ex3bankTransactionsComponent implements OnInit {
  transactions: any[] = []; //holds an array of transactions. initialized empty
  sortedTransactions: any[] = []; //declared to hold a copy of transactions array when sorted
  sortDirection: string = 'asc'; //determines sorting direction
  sortByColumn: string = ''; // determines wich column is sorted property

  //injection do transaction dataservice to fetch transactions
  constructor(private transactionService: Ex3TransactionDataService) { }

  //receives transaction data via data service via Observable returned by the getTransactions method and assigns it to transactions
  //assigns copy of transactions to sortedTransactions using the spread operator
  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(data => {
      this.transactions = data;
      this.sortedTransactions = [...this.transactions];
    });
  }
  
  // sortBy function using custom comparison function to sort sortedTransactions 
  // dates converted to milliseconds, label and id case sensitive comparison, other properties numeric comparison
  // toogles direction between asc and desc
  sortBy(property: string): void {
    this.sortByColumn = property;
    this.sortedTransactions.sort((a, b) => {
      if (property === 'date') {
          return this.sortDirection === 'asc' ? new Date(a[property]).getTime() - new Date(b[property]).getTime() : new Date(b[property]).getTime() - new Date(a[property]).getTime();
      } else if (property === 'label') {
         return this.sortDirection === 'asc' ? a[property].localeCompare(b[property]) : b[property].localeCompare(a[property]);
      } else if (property === 'id') {
          return this.sortDirection === 'asc' ? a[property].localeCompare(b[property]) : b[property].localeCompare(a[property]);
      } else {
          return this.sortDirection === 'asc' ? a[property] - b[property] : b[property] - a[property];
      }
    });
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }
  
}

