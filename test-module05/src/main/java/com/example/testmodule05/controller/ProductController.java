package com.example.testmodule05.controller;

import com.example.testmodule05.model.Product;
import com.example.testmodule05.service.IProductService;
import com.example.testmodule05.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private IProductService productService;
    @Autowired
    private IProductTypeService productTypeService;

    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public List<Product> findAllProduct(){
        return productService.findAllProduct();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Product findById(@PathVariable Integer id){
        return productService.findByIdProduct(id);
    }
    @PutMapping("/update/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void updateProduct(@PathVariable Integer id, @RequestBody Product product){
        Product product1 = productService.findByIdProduct(id);
        product.setId(product1.getId());
        productService.save(product1);
    }
}

