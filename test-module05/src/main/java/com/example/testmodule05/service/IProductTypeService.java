package com.example.testmodule05.service;

import com.example.testmodule05.model.Product;
import com.example.testmodule05.model.ProductType;

import java.util.List;

public interface IProductTypeService {
    List<ProductType> findAllProductType();
}
