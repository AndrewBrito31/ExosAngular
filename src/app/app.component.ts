import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ExosAngular';
  //injection of Router service for navigation
  constructor(private router: Router) {}

  //navigation methods to navigate to different routes using Router service
  openExercise1(): void {
    this.router.navigate(['/exercise1']);
  }

  openExercise2(): void {
    this.router.navigate(['/exercise2']);
  }

  openExercise3(): void {
    this.router.navigate(['/exercise3']);
  }
}
