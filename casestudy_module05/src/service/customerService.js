import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get(`http://localhost:3000/customers`);
        console.log(result.data);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};
export const create = async (customer) => {
    try {
        await axios.post(`http://localhost:3000/customers`, {...customer});
    } catch (error) {
        console.log(error);
    }
};
export const findAllTypeCustomer = async () => {
    try {
        const result = await axios.get(`http://localhost:3000/typeCustomer`);
        console.log(result.data);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};


export const update = async (customer) => {
    try {
        await axios.put(`http://localhost:3000/customers/${customer.id}`, {...customer});
    } catch (error) {
        console.log(error);
    }
};
export const findCustomerById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:3000/customers/${id}`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};
export const deleteCustomer = async (id) => {
    try {
        await axios.delete(`http://localhost:3000/customers/${id}`);
    } catch (error) {
        console.log(error);
    }
};
export const getCustomer = async (id) => {
    try {
        const resultDetail = await axios.get(`http://localhost:3000/customers/${id}`);
        return resultDetail.data;
    } catch (error) {
        console.log(error);
    }
};