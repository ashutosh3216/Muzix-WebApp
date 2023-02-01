package com.stackroute.product.muzixapp.service;

import com.stackroute.product.muzixapp.model.Product;
import com.stackroute.product.muzixapp.model.User;
import com.stackroute.product.muzixapp.repository.UserMuzixRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserMuzixServiceImpl implements UserMuzixService {

    @Autowired
    private UserMuzixRepository userMuzixRepository;

    @Override
    public User addUser(User user) {
        return userMuzixRepository.insert(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userMuzixRepository.findAll();
    }

    @Override
    public User getUserDetails(String emailId) {
        return userMuzixRepository.findById(emailId).get();
    }

    @Override
    public User addMusic(String email, Product product) {
        User user = userMuzixRepository.findById(email).get();
        user.getProducts().add(product);
        return userMuzixRepository.save(user);
    }

    @Override
    public User removeMusic(String email, Product product) {
        User user = userMuzixRepository.findById(email).get();
        user.getProducts().remove(product);

        return userMuzixRepository.save(user);
    }


}
