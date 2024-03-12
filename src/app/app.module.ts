import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { Ex1greetingComponent } from './ex1greeting/ex1greeting.component';
import { Ex2calculatorComponent } from './ex2calculator/ex2calculator.component';
import { Ex3bankTransactionsComponent } from './ex3bank-transactions/ex3bank-transactions.component';
import { Ex3bankTransactionDetailsComponent } from './ex3bank-transaction-details/ex3bank-transaction-details.component';
import { Ex3commonDateTimeComponent } from './ex3common-date-time/ex3common-date-time.component'; 

@NgModule({
  declarations: [
    AppComponent,
    Ex1greetingComponent, // Declaration for the exercise 1 component
    Ex2calculatorComponent, // Declaration for the exercise 1 component
    Ex3bankTransactionsComponent, // Declaration for the exercise 3 transactions list component
    Ex3bankTransactionDetailsComponent, // Declaration for the exercise 3 transaction details component
    Ex3commonDateTimeComponent // Declaration for the exercise 3 date and time component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Import of AppRoutingModule
    FormsModule,  // Import of FormsModule for two-way data binding
    HttpClientModule  // Import of HttpClientModule to the imports array to fetch from json transactions data
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
