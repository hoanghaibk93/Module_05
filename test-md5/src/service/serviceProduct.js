import axios from "axios";

export const findAllProduct = async () => {
    try {
        let result = await axios.get(`http://localhost:8080/product`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};
export const findAllType = async () => {
    try {
        let result = await axios.get(`http://localhost:8080/type`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};
export const update = async (product) => {
    try {
       await axios.put(`http://localhost:8080/product/update/${product.id}`,{...product});
    } catch (e) {
        console.log(e);
    }
};


export const findById = async (id) => {
    try {
        let result = await axios.get(`http://localhost:8080/product/${id}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};

// export const searchByName = async (name) => {
//     try {
//         let result = await axios.get(`http://localhost:3000/products?name_like=${name}`);
//         return result.data;
//     } catch (e) {
//         console.log(e);
//     }
// };
// export const searchByType = async (type) => {
//     try {
//         let result = await axios.get(`http://localhost:3000/products?idType=${type}`);
//         return result.data;
//     } catch (e) {
//         console.log(e);
//     }
// };
// export const searchByMuti = async (type, name) => {
//     try {
//         let result = await axios.get(`http://localhost:3000/products?idType=${type}&name_like=${name}`);
//         return result.data;
//     } catch (e) {
//         console.log(e);
//     }
// };

