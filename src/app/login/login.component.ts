import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../guard-service/auth.service';
import { RouteService } from '../guard-service/route.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService:UserService, private router:Router,private authS:AuthService) { }
  ngOnInit(): void {  } 
  loginForm = new FormGroup({
    'emailId':new FormControl(),
    'password':new FormControl()
  });  
  responseData:any;
  sendLoginData(){
    console.log(this.loginForm.value);
    this.userService.loginCheck(this.loginForm.value).subscribe(
      response=>{
          console.log(response);
          this.responseData=response;
          console.log(this.responseData.token);
          console.log(this.responseData.role);
          console.log(this.responseData.message);
          localStorage.setItem("jwt",this.responseData.token);
          localStorage.setItem("role",this.responseData.role);
          localStorage.setItem("email",this.responseData.email);
          localStorage.setItem("pass",this.responseData.password);
          if(this.responseData.role=='ROLE_ADMIN'){
 
            this.router.navigateByUrl("/adminView")
               }
                else{
                 this.router.navigateByUrl("/userView")
                }    
           })
        //  this.validateU();
        }
  goToSignUp(){
    this.router.navigateByUrl("signupView");
  }
  data:any;

  validateU(){
    this.sendLoginData();
    this.userService.loginCheck(this.loginForm.value).subscribe(
      response=>{
          console.log(response);
          this.data=response;
          // console.log(this.data.token);
          // console.log(this.data.role);
          // console.log(this.data.message);
          // localStorage.setItem("jwt",this.data.token);
          // localStorage.setItem("role",this.data.role);
          // localStorage.setItem("email",this.data.email);
          // localStorage.setItem("pass",this.data.password);
          
          

          if(this.data.email!=this.loginForm.value.emailId || this.data.password!=this.loginForm.value.password)
          {

 alert("true")
        //  this.authS.logIn();
          }
          else{
        //  alert("false")
        this.authS.logIn();
          }
      })}
}
