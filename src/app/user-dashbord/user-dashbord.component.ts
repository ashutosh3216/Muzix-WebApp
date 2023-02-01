import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UD } from '../model/pts';
import { AdminService } from '../service/admin.service';
import { UserService } from '../service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-dashbord',
  templateUrl: './user-dashbord.component.html',
  styleUrls: ['./user-dashbord.component.css']
})
export class UserDashbordComponent {
 
  constructor(private userService:UserService, private adminService:AdminService ,private r:Router) {
    this.getUserDetails();
    this.getAllProducts();
  }
  isVisible:boolean=false;
  ngOnInit(): void {
   
  }
  userDetails?:UD;
  arr?:any;
  getUserDetails(){
    this.userService.getUserDetails().subscribe(
      response=>{
        console.log(response);
        this.userDetails=response;
        this.arr=this.userDetails.products;
      } )
  }
  addProductToCart(productObj:any){
    this.userService.addProductToUserCart(productObj).subscribe(
      response=>{

        this.getUserDetails();
       // alert("Added to Playlist !!!")
      } )    

  }

  removeProductToCart(productObj:any){
    this.userService.removeProductToUserCart(productObj).subscribe(
      response=>{

        this.getUserDetails();
        // alert("Deleted From Playlist !!!")
      } )    
  }



// Custom Buttons
handleWarningAlertForPlaylist(productObj:any) {

  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to See it in Playlist!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, Remove it!',
    cancelButtonText: 'No, keep it',
  }).then((result) => {

    if (result.isConfirmed) {
      this.removeProductToCart(productObj)
    } else if (result.isDismissed) {

      console.log('Clicked No, File is safe!');

    }
  })

}





handleWarningAlertToADDPlaylist(productObj:any) {

  Swal.fire({
    title: 'Are you sure?',
    text: 'You want to add this in your PlayList!',
    icon: 'success',
    showCancelButton: true,
    confirmButtonText: 'Yes, Do it!',
    cancelButtonText: 'No, Leave it',
  }).then((result) => {

    if (result.isConfirmed) {
      this.addProductToCart(productObj)
    } else if (result.isDismissed) {

      console.log('Clicked No, File is safe!');

    }
  })

}






  allProducts:any;
  getAllProducts(){
    this.adminService.getAllProducts().subscribe(
      response=>{
        this.allProducts=response;
      })
  }
 
 

  src!: string;
  isPaused = false;

  onPlayClick(audio: HTMLAudioElement) {
    if (!this.isPaused) {
     audio.play();
     this.isPaused = true;
    } else {
     audio.pause();
     this.isPaused = false;
    }
   }
   
    onPause() {
     this.isPaused = false;
    }
   
  
  
  
  
  
  // Custom Buttons
  handleWarningAlert() {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to Enjoy Music!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Log out!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {

      if (result.isConfirmed) {

        this.r.navigateByUrl("/")

        console.log('Clicked Yes, to logOut');

      } else if (result.isDismissed) {

        console.log('Clicked No, to Continue');

      }
    })

  }
  
  
  }


