import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-ex3common-date-time',
  templateUrl: './ex3common-date-time.component.html',
  styleUrl: './ex3common-date-time.component.css'
})
export class Ex3commonDateTimeComponent implements OnInit {
  dateTime: Date = new Date(); //sets dateTime property
  private timerSubscription!: Subscription;  //holds Subscription interval

  constructor() { }

  //creates observable and emits every 1000 miliseconds, subscribes to dateTime
  ngOnInit(): void {
    this.timerSubscription = interval(1000).subscribe(() => {
      this.dateTime = new Date();
    });
  }

  //unsubscribes form timerSubscription and avoids memory leaks
  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}
