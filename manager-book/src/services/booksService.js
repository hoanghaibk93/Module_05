import axios from "axios";

export const findAll = async ()=>{
    try{
        const result = await axios.get('http://localhost:3000/books')
        return result.data
    }catch (error) {
        console.log(error)
    }
}
export const save = async (book)=>{
    try{
        await axios.post('http://localhost:3000/books', book)
    }catch (error) {
      console.log(error)
    }
}
export const update = async (book)=>{
    try{
        await axios.put('http://localhost:3000/books/${book.id}', book)
    }catch (error) {
        console.log(error)
    }
}