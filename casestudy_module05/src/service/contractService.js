import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get(`http://localhost:3000/contracts`);
        console.log(result.data)
        return result.data;
    } catch (error) {
        console.log(error);
    }
};
export const create = async (contract) =>{
    try{
        await axios.post(`http://localhost:3000/contracts`, {...contract})
    }catch (error) {
        console.log(error)
    }
}

export const deleteContract = async (id)=>{
    try{
        await axios.delete(`http://localhost:3000/contracts/${id}`)
    }catch (error) {
        console.log(error)
    }
}
export const getContract = async (id)=>{
    try{
        const resultDetail = await axios.get(`http://localhost:3000/contracts/${id}`)
        return resultDetail.data
    } catch (error) {
        console.log(error)
    }
}