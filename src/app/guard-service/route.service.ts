import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private route:Router) { }

  toLogin(){
    this.route.navigate(["loginView"]);
  }

  toHome(){
    this.route.navigate(["userView"]);
  }
}
