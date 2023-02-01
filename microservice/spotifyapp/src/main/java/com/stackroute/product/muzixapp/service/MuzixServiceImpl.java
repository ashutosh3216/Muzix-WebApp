package com.stackroute.product.muzixapp.service;

import com.stackroute.product.muzixapp.model.Product;
import com.stackroute.product.muzixapp.repository.MuzixRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MuzixServiceImpl implements MuzixService {
    @Autowired
    private MuzixRepository muzixRepository;
    @Override
    public List<Product> getAllMusic() {
        return muzixRepository.findAll();
    }
    @Override
    public Product addMusic(Product product) {
        return muzixRepository.insert(product);
    }
    @Override
    public Product getMusicById(String productId) {
        return muzixRepository.findById(productId).get();
    }
    @Override
    public boolean deleteMusic(String productId) {
        muzixRepository.deleteById(productId);
        return true;
    }
    @Override
    public Product updateMusic(Product product) {
        return muzixRepository.save(product);
    }
}
