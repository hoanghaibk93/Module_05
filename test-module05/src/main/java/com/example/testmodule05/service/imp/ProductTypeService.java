package com.example.testmodule05.service.imp;

import com.example.testmodule05.model.ProductType;
import com.example.testmodule05.repository.IProductTypeRepository;
import com.example.testmodule05.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductTypeService implements IProductTypeService {
    @Autowired
    private IProductTypeRepository productTypeRepository;
    @Override
    public List<ProductType> findAllProductType() {
        return productTypeRepository.findAllProductType();
    }
}
