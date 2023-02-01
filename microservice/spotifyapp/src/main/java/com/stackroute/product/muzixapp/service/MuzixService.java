package com.stackroute.product.muzixapp.service;

import com.stackroute.product.muzixapp.model.Product;

import java.util.List;

public interface MuzixService {
    // getallproducts, getproductbyid, addprodct, deleteproduct, updateproduct
    public abstract List<Product> getAllMusic();
    public abstract Product addMusic(Product product);
    public abstract Product getMusicById(String productId);
    public abstract boolean deleteMusic(String productId);
    public abstract Product updateMusic(Product product);
}
