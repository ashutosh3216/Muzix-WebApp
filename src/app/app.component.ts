import { Component } from '@angular/core';
import { AuthService } from './guard-service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'muzix-app';
  loggedIn:boolean=false;
  constructor(private authS:AuthService){
  }
  logOut()
  {this.loggedIn=this.authS.loggedIn
  this.authS.logOut();
  }
}
