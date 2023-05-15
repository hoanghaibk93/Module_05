package com.example.testmodule05.repository;

import com.example.testmodule05.model.Product;
import com.example.testmodule05.model.ProductType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface IProductTypeRepository extends JpaRepository<ProductType, Integer> {
    @Transactional
    @Query(value = "select * from product_type", nativeQuery = true)
    List<ProductType> findAllProductType();
}
