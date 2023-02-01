import { HtmlTagDefinition } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private userService:UserService, private adminService:AdminService,private r:Router) {
    this.getAllProducts();
  }
  isVisible:boolean=false;
  ngOnInit(): void {
    // const c:HTMLBodyElement= document.getElementById('sub'); 
    // c.style.display="flex";
  }
  allProducts:any;
  getAllProducts(){
    this.adminService.getAllProducts().subscribe(
      response=>{
        this.allProducts=response;
      })
  }
  onPlay(){
    alert("Song Played !!!")
  }
  onSub(){
  this.r.navigateByUrl("/loginView");
  }
}
