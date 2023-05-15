package com.example.testmodule05.model;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name="product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @NotBlank(message = "Tên không được để trống")
    private String name;
    private String date;
    private Integer quality;
    @ManyToOne
    @JoinColumn(name="id_type")
    private ProductType productType;

    public Product() {
    }

    public Product(String name, String date, Integer quality, ProductType productType) {
        this.name = name;
        this.date = date;
        this.quality = quality;
        this.productType = productType;
    }

    public Product(Integer id, String name, String date, Integer quality, ProductType productType) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.quality = quality;
        this.productType = productType;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Integer getQuality() {
        return quality;
    }

    public void setQuality(Integer quality) {
        this.quality = quality;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }
}
