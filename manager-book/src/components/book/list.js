import React, {useEffect, useState} from "react";
import * as booksService from "../../services/booksService";
import {Link, NavLink} from "react-router-dom";


export function List() {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        const fetchApi = async ()=>{
            const result = await booksService.findAll()
            setBooks(result)
        }
        fetchApi()
    })
    const handleDelete = async (id) => {
        await booksService.deleteBook(id);
        let result = await booksService.findAll();
        setBooks(result);
    };

    return (
        <>
            <h1>Library</h1>
            <NavLink to='/create'>Create</NavLink>
            <table className="table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                { books.map((book)=> (
                <tr>
                    <td scope="row">{book.id}</td>
                    <td>{book.title}</td>
                    <td>{book.quantity}</td>
                    <td>
                        <button className="btn btn-primary" type="button">
                            <Link style={{color: "red", textDecoration: "none"}} to={`/update/${book.id}`}>Cập nhật</Link>
                        </button>
                        
                        <button onClick={()=>handleDelete(book.id)} className="btn btn-danger" type="button">
                           Xóa
                        </button>
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
        </>
    );

}