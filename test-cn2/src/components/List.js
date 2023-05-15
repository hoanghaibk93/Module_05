import 'react-toastify/dist/ReactToastify.css';
import React, {useEffect, useState} from "react";
import * as bookService from "../service/bookService";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";

export function List() {
    const [bookList, setBookList] = useState([]);
    const [typeList, setTypeList] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            let bookList = await bookService.findAllBook();
            let typeList = await bookService.findAllType();
            setBookList(bookList);
            setTypeList(typeList);
        };
        fetchApi();
    }, []);
    const handleSort = async () => {
        let result = await bookService.sortByPrice();
        setBookList(result);
    };
    const handleSearchByType = async () => {
        let type = document.getElementById('type').value;
        let result = await bookService.searchByType(type);
        setBookList(result);
    };
    const handleSearchByTypeAndName = async () => {
        let type = document.getElementById('type').value;
        let name = document.getElementById('name').value;
        let result = await bookService.searchByTypeAndName(type, name);
        setBookList(result);
    };
    const [perPage] = useState(2);
    const [currentPage, setCurrentPage] = useState(0);
    let pageCount = Math.ceil(bookList.length / perPage);
    let offset = perPage * currentPage
    let currentPageList = bookList.slice(offset, offset + perPage);
    const handlePageClick = async (page)=>{
       setCurrentPage( await page.selected)
    }
    return (
        <>
            <div className="d-inline-flex mt-4">
                <Link to='/create' className='btn btn-outline-secondary me-3'>Create</Link>
                <button onClick={() => {
                    handleSort();
                }} className="btn btn-outline-secondary me-3">Sort by price
                </button>
                <label className="form-label me-3">Search By Type:</label>
                <div>
                    <select onChange={() => {
                        handleSearchByType();
                    }} aria-label="Default select example" className="form-select me-3" id="type">
                        {typeList.map((type, index) => (
                            <option key={index} value={type.id}>{type.name}</option>
                        ))}
                    </select>
                </div>

                <input onChange={() => {
                    handleSearchByTypeAndName();
                }} aria-label="Search" className="form-control me-lg-2 m-4" placeholder='Search by name and Type'
                       id="name" name="" type="text"/>

            </div>
            <h2 className="text-uppercase text-center mt-4">
                Book List
            </h2>
            <table className="table table-bordered w-75 m-auto ">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">DATE START</th>
                    <th scope="col">NAME TYPE</th>
                </tr>
                </thead>
                <tbody>
                {bookList.length === 0 ? <h1 className='text-danger'>Không tìm thấy</h1> :
                    currentPageList.map((book, index) => (
                        <tr key={index}>
                            <th scope="row">{book.id}</th>
                            <td>{book.name}</td>
                            <td>{book.price}</td>
                            <td>{book.date}</td>
                            <td>{typeList.find((type) => {
                                return type.id === book.idType;
                            })?.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ReactPaginate
                onPageChange={handlePageClick}
                pageCount={pageCount}
                activeClassName={'active'}
                containerClassName={'pagination'}
                marginPagesDisplayed={2}
                previousLabel={'trước'}
                nextLabel={'sau'}
                pageClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
            />
        </>
    );
}