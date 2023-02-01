package com.stackroute.product.muzixapp.repository;

import com.stackroute.product.muzixapp.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserMuzixRepository extends MongoRepository<User, String> {
    // save() / insert()
    // custom
}
