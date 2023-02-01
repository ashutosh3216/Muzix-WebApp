package com.stackroute.auth.authapp.service;

import com.stackroute.auth.authapp.model.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class SecurityTokenGeneratorImpl implements SecurityTokenGenerator {
    @Override
    public Map<String, String> generateToken(User user) {
        Map<String, String> result = new HashMap<String, String>();


        Map<String, Object> userdata = new HashMap<>();

        userdata.put("user_role", user.getRole());
        userdata.put("user_email", user.getEmailId());

        String jwt = Jwts.builder()
                .setClaims(userdata)
                .setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS512, "mysecretkey")
                .compact();

        result.put("token", jwt);
        result.put("message", "User login success");
        result.put("email",user.getEmailId());
        result.put("password",user.getPassword());
        result.put("role", user.getRole());
        return result;
    }
}
