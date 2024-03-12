import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1greeting',
  templateUrl: './ex1greeting.component.html',
  styleUrl: './ex1greeting.component.css'
})
export class Ex1greetingComponent {
  // Properties to store user input and customization options
  name: string = '';
  font: string = 'Arial'; // defines Arial as the default font
  size: number = 12;
  alignment: string = '';
  // Stores the state of checkboxes alignment 
  leftAlignment: boolean = false; 
  centerAlignment: boolean = false; 
  rightAlignment: boolean = false; 

  // Method to update the greeting message on change based on user input
  updateGreeting(): void { }

  // Method to update alignment based on checkbox selection
  updateAlignment(option: string): void {
    if (this.alignment === option) {
      // If the option is already selected, unselect it
      this.alignment = '';
    } else {
      // Otherwise, select the option
      this.alignment = option;
    }
    this.updateGreeting(); // Update the greeting message
  }
  
}
