package com.stackroute.product.muzixapp.service;

import com.stackroute.product.muzixapp.model.Product;
import com.stackroute.product.muzixapp.model.User;

import java.util.List;

public interface UserMuzixService {
    User addUser(User user);

    List<User> getAllUsers();

    User getUserDetails(String emailId);

    User addMusic(String email, Product product);

    User removeMusic(String email, Product product);
}
