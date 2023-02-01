import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private httpClient:HttpClient) { }
  productAppBeBaseUrl = "http://localhost:5555/product-app-v1";
 
  getAllProducts() {
    return this.httpClient.get(this.productAppBeBaseUrl+"/get-all-products");
  }
  addNewProduct(productObj:any){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('jwt')
    });
    let requestOptions = {headers : httpHeaders}
    return this.httpClient.post(this.productAppBeBaseUrl+"/admin/add-new-product",productObj,requestOptions);
  }
  deleteProduct(productId:string){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('jwt')
    });
    let requestOptions = {headers : httpHeaders}
    return this.httpClient.delete(this.productAppBeBaseUrl+"/admin/delete-product/" + productId);
  }
// http://localhost:5555/product-app-v1/admin/delete-product/XXXX

  updateProduct(productObj:any){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('jwt')
    });
    let requestOptions = {headers : httpHeaders}
    return this.httpClient.put(this.productAppBeBaseUrl+"/admin/update-product",productObj,requestOptions);
  }  
}
