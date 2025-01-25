import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  standalone: false,
  
  templateUrl: './task1.component.html',
  styleUrl: './task1.component.scss'
})
export class Task1Component {
  userName: string = "";

  // Getter to determine if the button should be disabled
  get isButtonDisabled(): boolean {
    return this.userName.trim().length === 0; // Disable when input is empty or whitespace
  }

  // Method to reset the username
  resetUserName() {
    this.userName = "";
  }
}