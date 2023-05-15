import axios from "axios";

export const findAllContract = async () => {
    try {
        let result = await axios.get(`http://localhost:3000/contracts`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};
export const findAllType = async () => {
    try {
        let result = await axios.get(`http://localhost:3000/type`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};
export const create = async (contract) => {
    try {
        await axios.post(`http://localhost:3000/contracts`, contract);
    } catch (e) {
        console.log(e);
    }
};
export const sortByPrice = async () => {
    try {
        let result = await axios.get(`http://localhost:3000/contracts?_sort=price&_order=asc`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};
export const searchByName = async (name) => {
    try {
        let result = await axios.get(`http://localhost:3000/contracts?name_like=${name}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};
export const searchByType = async (type) => {
    try {
        let result = await axios.get(`http://localhost:3000/contracts?idType=${type}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};
export const searchByMuti = async (type, name) => {
    try {
        let result = await axios.get(`http://localhost:3000/contracts?idType=${type}&name_like=${name}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};