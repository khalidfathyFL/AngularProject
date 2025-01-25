import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  standalone: false,
  
  templateUrl: './task2.component.html',
  styleUrl: './task2.component.scss'
})
export class Task2Component {

  isDisplayed: boolean = true;
counter: number = 0;
  logs: string[] = [];


  onButtonClick() {
this.isDisplayed = !this.isDisplayed;
this.counter++;
this.logs.push(`Button clicked. ${this.counter}`);
  }

}
