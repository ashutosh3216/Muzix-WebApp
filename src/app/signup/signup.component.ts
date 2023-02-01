import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  maxDate: Date = new Date();

  profileForm = this.fb.group({
    userName: ['', Validators.required],
    emailId: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    mobileNo: ['', [Validators.pattern(/^[789]\d{9,9}$/)]],
    address: ['', []],
  });

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar,private userService:UserService ,private r:Router) { this.maxDate.setDate(this.maxDate.getDate() - 1); }

  get userName() { return this.profileForm.get("userName") }

  get emailId() { return this.profileForm.get("emailId") }

  get mobileNo() { return this.profileForm.get("mobileNo"); }

  get password() { return this.profileForm.get("password"); }
  get address() { return this.profileForm.get("address"); }


  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.profileForm.value);
    this._snackBar.open('Congrats!!You have submiited the form!!', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
     this.profileForm.reset();
    }

  // mustMatchValidator(fg: AbstractControl) {
  //   const passwordValue = fg.get("password")?.value;
  //   const confirmPasswordValue = fg.get("confirmPassword")?.value;
  //   if (!passwordValue || !confirmPasswordValue) {
  //     return null;
  //   }
  //   if (passwordValue != confirmPasswordValue) {
  //       return { mustMatch: false }
  //   }
  //   return null;
  // }

  sendSignupData(){
  
    // this.canDeactivate();

   // alert(this.SignUpForm);


    console.log(this.profileForm.value);
    this.userService.registerUser(this.profileForm.value).subscribe(
      response=>{
        console.log(response);
     // alert("Succesfully signed up");
      // this.onSubmit();
      //   // alert, snackbar        
       }
    )
    this.onSubmit()
    this.r.navigateByUrl("/loginView");

  }
}

