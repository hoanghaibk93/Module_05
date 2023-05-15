package com.example.testmodule05.repository;

import com.example.testmodule05.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Transactional
    @Query(value = "select * from product", nativeQuery = true)
    List<Product> findAllProduct();
}
