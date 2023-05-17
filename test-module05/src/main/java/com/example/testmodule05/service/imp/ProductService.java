package com.example.testmodule05.service.imp;

import com.example.testmodule05.model.Product;
import com.example.testmodule05.repository.IProductRepository;
import com.example.testmodule05.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;

    @Override
    public List<Product> findAllProduct() {
        return productRepository.findAllProduct();
    }

    @Override
    public Product findByIdProduct(Integer idProduct) {
        return productRepository.findById(idProduct).get();
    }

    @Override
    public void save(Product product) {
        productRepository.save(product);
    }

    @Override
    public void delete(Integer idProduct) {
        productRepository.deleteById(idProduct);
    }

    @Override
    public Product edit(Integer id, Product product) {
        Product productOld = findByIdProduct(id);
        productOld.setName(product.getName());
        productOld.setDate(product.getDate());
        productOld.setQuality(product.getQuality());
        productOld.setProductType(product.getProductType());
        return productRepository.save(productOld);
    }

    @Override
    public List<Product> findByNameContaining(String name) {
        return productRepository.findByNameContaining(name);
    }
}
