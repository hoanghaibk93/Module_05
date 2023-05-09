import React, {useEffect, useState} from "react";
import * as booksService from "../../services/booksService";
import {Link, NavLink} from "react-router-dom";


export function List() {
    const [books, setBooks] = useState([]);
    const [bookDetail, setBookDetail] = useState();
    useEffect(()=>{
        const fetchApi = async ()=>{
            const result = await booksService.findAll()
            setBooks(result)
        }
        fetchApi()
    })
    const getData = async (id) => {
        const data = await booksService.getBook(id);
        setBookDetail(data);
    };
    const handleDelete = async () => {
        await booksService.deleteBook(bookDetail.id);
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

                        {/*<button onClick={()=>handleDelete(book.id)} className="btn btn-danger" type="button">*/}
                        {/*   Xóa*/}
                        {/*</button>*/}
                        <button onClick={()=>getData(book.id)} type="button" className="btn btn-danger" data-bs-toggle="modal"
                                data-bs-target="#exampleModal" >
                            Xóa123
                        </button>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                             aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        {/*<button type="button" className="btn-close" data-bs-dismiss="modal"*/}
                                        {/*        aria-label="Close"></button>*/}
                                    </div>
                                    <div className="modal-body">
                                        <span>Bạn có muốn xóa</span> <span>{bookDetail?.title}</span>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Đóng
                                        </button>
                                        <button  onClick={()=>handleDelete()} type="button" className="btn btn-primary"  data-bs-dismiss="modal">Xóa</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
        </>
    );

}