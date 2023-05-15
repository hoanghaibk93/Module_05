import axios from "axios";

export const findAllProduct = async () => {
    try {
        const result = await axios.get(`http://localhost:3000/product?_sort=price,id&_order=asc,desc`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};
export const findAllProductType = async () => {
    try {
        const result = await axios.get(`http://localhost:3000/productType`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};
export const create = async (product) => {
    try {
        await axios.post(`http://localhost:3000/product`, {...product});
    } catch (error) {
        console.log(error);
    }
};
export const update = async (product) => {
    try {
        await axios.put(`http://localhost:3000/product/${product.id}`, {...product});
    } catch (error) {
        console.log(error);
    }
};
export const findById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:3000/product/${id}`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};
export const deleteProduct = async (id) => {
    try {
        await axios.delete(`http://localhost:3000/product/${id}`);
    } catch (e) {
        console.log(e);
    }
};
export const getDataProduct = async (id) => {
    try {
        const result = await axios.get(`http://localhost:3000/product/${id}`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};
export const findAllGreaterPrice = async () => {
    try {
        const result = await axios.get(`http://localhost:3000/product?price_lte=350`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};
export const searchByName = async (nameSearch) => {
    try {
        let result = await axios.get(`http://localhost:3000/product?nameProduct_like=${nameSearch}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};
export const searchByType = async (idType) => {
    try {
        let result = await axios.get(`http://localhost:3000/product?idProductType=${idType}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};
export const searchByTypeAndName = async (id,name) => {
    try {
     let result = await axios.get(`http://localhost:3000/product?idProductType=${id}&nameProduct_like=${name}`)
        return result.data
    } catch (e) {
        console.log(e);

    }
};
