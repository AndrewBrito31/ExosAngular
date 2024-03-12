import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ex3TransactionDataService } from '../ex3transaction-data.service';

@Component({
  selector: 'app-ex3bank-transaction-details',
  templateUrl: './ex3bank-transaction-details.component.html',
  styleUrl: './ex3bank-transaction-details.component.css'
})

export class Ex3bankTransactionDetailsComponent implements OnInit {
  transaction: any = {};

  //injection of ActivatedRoute and transaction data service
  constructor(
    private route: ActivatedRoute,
    private transactionService: Ex3TransactionDataService
  ) { }

  //subscribes to changes in the route parameters, extracts the id parameter to then fetch said id and update the view
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.transactionService.getTransactionById(id).subscribe(data => {
        this.transaction = data;
      });
    });
  }
}
  
