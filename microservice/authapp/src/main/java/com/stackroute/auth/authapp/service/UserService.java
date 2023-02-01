package com.stackroute.auth.authapp.service;

import com.stackroute.auth.authapp.model.SignupData;
import com.stackroute.auth.authapp.model.User;

import java.util.List;
import java.util.Map;

public interface UserService {
    User registerUser1(SignupData signupData);

    User registerUser(User user);

    User loginCheck(User user);

    List<User> getUser();
}



