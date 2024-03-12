import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2calculator',
  templateUrl: './ex2calculator.component.html',
  styleUrl: './ex2calculator.component.css'
})

export class Ex2calculatorComponent {
  // Properties to store user input and result of calculations
  operand1: number = 0;
  operand2: number = 0;
  operation: string = '';
  result: number = 0;
  log: { time: string, operation: string, result: number }[] = [];

  // Method to perform calculation based on the selection. updates result and adds log to log array
  calculate(): void {
    let result: number | null = null;
    const time = new Date().toLocaleTimeString();
    
    switch (this.operation) {
      case 'add':
        result = this.operand1 + this.operand2;
        break;
      case 'subtract':
        result = this.operand1 - this.operand2;
        break;
      case 'multiply':
        result = this.operand1 * this.operand2;
        break;
      case 'divide':
        result = this.operand2 !== 0 ? this.operand1 / this.operand2 : null;
        break;
    }

    if (result !== null) {
      this.result = result;
      this.log.push({ time, operation: this.operation, result });
    }
  }

   // Method to remove specific log entries
  removeEntry(entry: any): void {
    const index = this.log.indexOf(entry);
    if (index !== -1) {
      this.log.splice(index, 1);
    }
  }
}