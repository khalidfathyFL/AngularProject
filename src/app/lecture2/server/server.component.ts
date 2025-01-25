import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  standalone: false,
  
  templateUrl: './server.component.html',
  styleUrl: './server.component.scss'
})
export class ServerComponent {

  serverId: number = 10;
  serverStatus: string = 'online';
  addServerIsAllowed: boolean = false;
  serverStatusMessage: string = 'Server is offline';
  serverTest: string = 'Server test';
  isServerCreated: boolean = false;
  isSpecial: boolean = true;
  isSucess: boolean = true;
  serverStyles = {
    "background-color": "blue",
    "color": "red",
    "font-size": "20px",
    "font-style": "italic"
  }

  serverClasses = {
    "special": this.isSpecial,
    "success": this.isSucess
  }

  
  constructor() {
    setTimeout(() => {
      this.addServerIsAllowed = true;
    }, 3000);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  changeServerStatus() {
    this.serverStatusMessage = 'Server is online';
    this.isServerCreated = true;
  }
}
