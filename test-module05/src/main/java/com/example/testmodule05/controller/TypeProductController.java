package com.example.testmodule05.controller;

import com.example.testmodule05.model.Product;
import com.example.testmodule05.model.ProductType;
import com.example.testmodule05.service.IProductService;
import com.example.testmodule05.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/type")
public class TypeProductController {
    @Autowired
    private IProductService productService;
    @Autowired
    private IProductTypeService productTypeService;

    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductType> findAllProductType(){
        return productTypeService.findAllProductType();
    }
}
