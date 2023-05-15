import axios from "axios";

export const findAllStudent = async () => {
    try {
        let result = await axios.get(`http://localhost:3000/students?_sort=age&order_=asc`);
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
export const create = async (student) => {
    try {
        await axios.post(`http://localhost:3000/students`, student);
    } catch (e) {
        console.log(e);
    }
};
export const update = async (student) => {
    try {
        await axios.put(`http://localhost:3000/students/${student.id}`, student);
    } catch (e) {
        console.log(e);
    }
};
export const findById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:3000/students/${id}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};
export const deleteStudent = async (id) => {
    try {
        await axios.delete(`http://localhost:3000/students/${id}`);
    } catch (e) {
        console.log(e);
    }
};

export const searchByName = async (name) => {
    try {
        let result = await axios.get(`http://localhost:3000/students?name_like=${name}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};
export const searchByType = async (type) => {
    try {
        let result = await axios.get(`http://localhost:3000/students?idType=${type}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};

export const searchByMuti = async (type1, name1) => {
    try {
        let result = await axios.get(`http://localhost:3000/students?idType=${type1}&name_like=${name1}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};