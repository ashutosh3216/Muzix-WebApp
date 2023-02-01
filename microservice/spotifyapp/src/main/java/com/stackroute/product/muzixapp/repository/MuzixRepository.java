package com.stackroute.product.muzixapp.repository;

import com.stackroute.product.muzixapp.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MuzixRepository extends MongoRepository<Product,String> {
}
