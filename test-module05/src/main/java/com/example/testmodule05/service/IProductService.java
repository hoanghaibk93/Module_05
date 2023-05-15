package com.example.testmodule05.service;

import com.example.testmodule05.model.Product;

import java.util.List;

public interface IProductService {
    List<Product> findAllProduct();

    Product findByIdProduct(Integer idProduct);

    void save(Product product);
    void delete(Integer idProduct);

}
