import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get(`http://localhost:3000/facilities`);
        console.log(result.data);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};
export const create = async (facility) => {
    try {
        await axios.post(`http://localhost:3000/facilities`, {...facility});
    } catch (error) {
        console.log(error);
    }
};
export const findAllTypeFacility = async () => {
    try {
        const result = await axios.get(`http://localhost:3000/typeFacility`);
        console.log(result.data);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};
export const findAllFreeService = async () => {
    try {
        const result = await axios.get(`http://localhost:3000/freeService`);
        console.log(result.data);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};
export const findAllTypeRental = async () => {
    try {
        const result = await axios.get(`http://localhost:3000/typeRental`);
        console.log(result.data);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};

export const update = async (facility) => {
    try {
        await axios.put(`http://localhost:3000/facilities/${facility.id}`, {...facility});
    } catch (error) {
        console.log(error);
    }
};
export const findFacilityById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:3000/facilities/${id}`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};
export const deleteFacility = async (id) => {
    try {
        await axios.delete(`http://localhost:3000/facilities/${id}`);
    } catch (error) {
        console.log(error);
    }
};
export const getFacility = async (id) => {
    try {
        const resultDetail = await axios.get(`http://localhost:3000/facilities/${id}`);
        return resultDetail.data;
    } catch (error) {
        console.log(error);
    }
};

export const findByName = async (names) => {
    try {
        const result = await axios.get(`http://localhost:3000/facilities?nameFacility_like=${names}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};
export const findByTypeAnhName = async (type, name) => {
    try {
        const result = await axios.get(`http://localhost:3000/facilities?typeFacility=${type}&nameFacility_like=${name}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};
export const findByFacilityType = async (type) => {
    const result = await axios.get(`http://localhost:3000/facilities?typeFacility=${type}`);
    return result.data;
};

export const findAllSortArea = async () => {
    try {
        const result = await axios.get(`http://localhost:3000/facilities?_sort=usableArea&_order=asc`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};