import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex1greetingComponent } from './ex1greeting/ex1greeting.component';
import { Ex2calculatorComponent } from './ex2calculator/ex2calculator.component';
import { Ex3bankTransactionsComponent } from './ex3bank-transactions/ex3bank-transactions.component';
import { Ex3bankTransactionDetailsComponent } from './ex3bank-transaction-details/ex3bank-transaction-details.component';


const routes: Routes = [
  { path: 'exercise1', component: Ex1greetingComponent }, // path to '/exercise1' 
  { path: 'exercise2', component: Ex2calculatorComponent }, // path to '/exercise2' 
  { path: 'exercise3', component: Ex3bankTransactionsComponent }, // path to '/exercise3 transactions list' 
  { path: 'exercise3/transaction/:id', component: Ex3bankTransactionDetailsComponent }, // path to '/exercise3 transaction details' 
  { path: '**', redirectTo: '/exercise1' } // Redirect invalid routes to Exercise 1
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
