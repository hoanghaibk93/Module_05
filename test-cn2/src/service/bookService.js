import axios from "axios";

export const findAllBook = async () => {
    try {
        let result = await axios.get(`http://localhost:3000/books`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};
export const findAllType = async () => {
    try {
        let result = await axios.get(`http://localhost:3000/types`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};
export const create = async (book) => {
    try {
      await axios.post(`http://localhost:3000/books`,book);
    } catch (e) {
        console.log(e);
    }
};
export const sortByPrice = async () => {
    try {
        let result = await axios.get(`http://localhost:3000/books?_sort=price,id&_order=asc,desc`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};
export const searchByType = async (type) => {
    try {
        let result = await axios.get(`http://localhost:3000/books?idType=${type}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};
export const searchByTypeAndName = async (type, name) => {
    try {
        let result = await axios.get(`http://localhost:3000/books?idType=${type}&name_like=${name}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};