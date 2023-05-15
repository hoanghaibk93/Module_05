package com.example.testmodule05.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="product_type")
public class ProductType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_type")
    private Integer idType;
    @NotBlank(message = "Tên không được để trống")
    @Column(name="name_product")
    private String nameProduct;

    public ProductType() {
    }

    public ProductType(Integer idType, String nameProduct) {
        this.idType = idType;
        this.nameProduct = nameProduct;
    }

    public ProductType(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public Integer getIdType() {
        return idType;
    }

    public void setIdType(Integer idType) {
        this.idType = idType;
    }

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }
}
