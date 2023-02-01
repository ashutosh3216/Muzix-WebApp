package com.stackroute.product.muzixapp.controller;

import com.stackroute.product.muzixapp.model.Product;
import com.stackroute.product.muzixapp.service.UserMuzixService;
import com.stackroute.product.muzixapp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

@CrossOrigin
@RestController
@RequestMapping("/product-app-v1")
public class UserMuzixController {

    @Autowired
    private UserMuzixService userMuzixService;

    // http://localhost:5555/product-app-v1/add-user  [POST]
    @PostMapping("/add-user")
    public ResponseEntity<?> addUser(@RequestBody User user){
        user.setProducts(new ArrayList<Product>());
        return new ResponseEntity<>(userMuzixService.addUser(user), HttpStatus.OK);
    }

    // http://localhost:5555/product-app-v1/get-user-details  [GET]
    @GetMapping("/get-user-details")
    public ResponseEntity<?> getUserDetails(HttpServletRequest request){
        String emailid = (String) request.getAttribute("current_user_emailid");
        return new ResponseEntity<>(userMuzixService.getUserDetails(emailid),HttpStatus.OK);
    }

    // http://localhost:5555/product-app-v1/add-product-to-user  [POST]
    @PostMapping("/add-product-to-user")
    public ResponseEntity<?> addProduct(@RequestBody Product product, HttpServletRequest request){
        String current_email= (String) request.getAttribute("current_user_emailid");
        return new ResponseEntity<>(userMuzixService.addMusic(current_email, product),HttpStatus.OK);
    }
    @PostMapping("/remove-product-to-user")
    public ResponseEntity<?> removeProduct(@RequestBody Product product, HttpServletRequest request){
        String current_email= (String) request.getAttribute("current_user_emailid");
        return new ResponseEntity<>(userMuzixService.removeMusic(current_email, product),HttpStatus.OK);
    }

}







/*


 */