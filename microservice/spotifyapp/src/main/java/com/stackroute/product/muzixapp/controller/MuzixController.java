package com.stackroute.product.muzixapp.controller;

import com.stackroute.product.muzixapp.model.Product;
import com.stackroute.product.muzixapp.service.MuzixService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product-app-v1")
public class MuzixController {
    @Autowired
    private MuzixService muzixService;
    /*
    GET
    http://localhost:5555/product-app-v1/get-all-products
     */
    @GetMapping("/get-all-products")
    public ResponseEntity<?> getAllProducts(){
        return new ResponseEntity<>(muzixService.getAllMusic(), HttpStatus.OK);
    }
    /*
 GET
 http://localhost:5555/product-app-v1/get-product-by-id/XXXXX
  */
    @GetMapping("/get-product-by-id/{productId}")
    public ResponseEntity<?> getProductById(@PathVariable String productId){
        return new ResponseEntity<>(muzixService.getMusicById(productId),HttpStatus.OK);
    }

    /*
 POST
 http://localhost:5555/product-app-v1/admin/add-new-product
  */
    @PostMapping("/admin/add-new-product")
    public ResponseEntity<?> addProduct(@RequestBody Product product){

        return new ResponseEntity<>(muzixService.addMusic(product),HttpStatus.OK);
    }

    /*
 PUT
 http://localhost:5555/product-app-v1/admin/update-product
  */
    @PutMapping("/admin/update-product")
    public ResponseEntity<?> updateProduct(@RequestBody Product product){
        return new ResponseEntity<>(muzixService.updateMusic(product),HttpStatus.OK);
    }

    /*
 DELETE
 http://localhost:5555/product-app-v1/admin/delete-product/XXXXX
  */
    @DeleteMapping("/admin/delete-product/{productId}")
    public ResponseEntity<?> deleteProduct(@PathVariable String productId){
        return new ResponseEntity<>(muzixService.deleteMusic(productId),HttpStatus.OK);
    }
}
