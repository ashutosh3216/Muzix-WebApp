package com.stackroute.auth.authapp.service;

import com.stackroute.auth.authapp.model.SignupData;
import com.stackroute.auth.authapp.model.User;
import com.stackroute.auth.authapp.model.UserDTO;
import com.stackroute.auth.authapp.proxy.UserProxy;

import com.stackroute.auth.authapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserProxy userProxy;


    @Override
    public User registerUser1(SignupData signupData) {

        UserDTO userDTO = new UserDTO(signupData.getEmailId(), signupData.getUserName(),
                signupData.getMobileNo(), signupData.getAddress());
        ResponseEntity<?> response = userProxy.sendUserDtoToProductApp(userDTO);

        System.out.println(response);

        User user = new User(signupData.getEmailId(), signupData.getPassword(), "ROLE_USER");

        return userRepository.save(user);
    }

    @Override
    public User registerUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User loginCheck(User user) {

        if (userRepository.findById(user.getEmailId()).isPresent()) {

            User result = userRepository.findById(user.getEmailId()).get();
            if (result.getPassword().equals(user.getPassword())) {

                return result;
            } else {
                return null;
            }
        } else {

            return null;
        }
    }

    @Override
    public List<User> getUser() {
        return userRepository.findAll();
    }
}
