import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  authAppBeBaseUrl = "http://localhost:4444/auth-app-v1";
  productAppBeBaseUrl = "http://localhost:5555/product-app-v1";

  registerUser(signupdata:any){
    // authAppBeBaseUrl/regiser-uer1  with signupdata object  [POST]
    return this.httpClient.post(this.authAppBeBaseUrl+"/register-user1",signupdata);
  }

  loginCheck(logindata:any){
    return this.httpClient.post(this.authAppBeBaseUrl+"/login-check",logindata);
  }

  getUserDetails(){
    // get jwt from localstorage, attach to httpClient request  
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('jwt')
    });
    let requestOptions = {headers : httpHeaders}
    return this.httpClient.get(this.productAppBeBaseUrl+"/get-user-details",requestOptions);
  }
  getAllUser(){
    // let httpHeaders = new HttpHeaders({
    //   'Authorization' : 'Bearer ' + localStorage.getItem('jwt')
    // });
    // let requestOptions = {headers : httpHeaders}
    return this.httpClient.get(this.authAppBeBaseUrl+"/get-users");
  }



  addProductToUserCart(productObj:any){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('jwt')
    });
    let requestOptions = {headers : httpHeaders}
    return this.httpClient.post(this.productAppBeBaseUrl+"/add-product-to-user",productObj,requestOptions);
  }

  removeProductToUserCart(productObj:any){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('jwt')
    });
    let requestOptions = {headers : httpHeaders}
    return this.httpClient.post(this.productAppBeBaseUrl+"/remove-product-to-user",productObj,requestOptions);
  }
}
