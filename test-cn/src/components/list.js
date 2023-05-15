import 'react-toastify/dist/ReactToastify.css';
import React, {useEffect, useState} from "react";
import * as contractService from "../service/contractSerivce";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";

export function List() {
    const [contractList, setContractList] = useState([]);
    const [typeList, setTypeList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [perPage] = useState(3);
    useEffect(() => {
        const fetchApi = async () => {
            let resultContract = await contractService.findAllContract();
            let resultType = await contractService.findAllType();
            setContractList(resultContract);
            setTypeList(resultType);
        };
        fetchApi();
    }, []);
    const sortByPrice = async () => {
        let result = await contractService.sortByPrice();
        setContractList(result);
    };
    const searchByName = async () => {
        let name = await document.getElementById('name').value;
        let result = await contractService.searchByName(name);
        setContractList(result);
    };
    const searchByType = async () => {
        let type = await document.getElementById('type').value;
        let result = await contractService.searchByType(type);
        setContractList(result);
    };
    const searchByTypeAndName = async () => {
        let type = await document.getElementById('type').value;
        let name = await document.getElementById('name2').value;
        let result = await contractService.searchByMuti(type, name);
        setContractList(result);
    };
    const handlePageClick = (curPage) => {
        setCurrentPage(curPage.selected);
    };
    const pageCount = Math.ceil(contractList.length / perPage);
    const offset = perPage * currentPage;
    const listContractPage = contractList.slice(offset, offset+perPage)

    return (
        <>
            <div>
                <Link to={'/create'} className="btn btn-info mt-4">Create Contract</Link>
                <button onClick={() => {
                    sortByPrice();
                }} className="btn btn-warning mt-3 mb-3" type="button">Sort by Price
                </button>
                <div>
                    <input onChange={() => {
                        searchByName();
                    }} aria-label="Search" className="form-control me-lg-2 m-4"
                           id='name'
                           placeholder="Search by name"
                           type="text"
                    />
                </div>
                <div>
                    <input onChange={() => {
                        searchByTypeAndName();
                    }} aria-label="Search" className="form-control me-lg-2 m-4"
                           id='name2'
                           placeholder="Search by name and type"
                           type="text"
                    />
                </div>
                <div>
                    <label className="form-label">Search by type</label>
                    <select onChange={() => {
                        searchByType();
                    }} aria-label="Default select example" className="form-select" id="type">
                        {typeList.map((type, index) => (
                            <option value={type.id}>{type.name}</option>
                        ))}

                    </select>
                </div>
                <h2 className="text-uppercase text-center mt-4">
                    List contracts
                </h2>
                <table className="table table-bordered w-75 m-auto ">
                    <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">start</th>
                        <th scope="col">finish</th>
                        <th scope="col">price</th>
                        <th scope="col">Name type</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contractList.length === 0 ? <h1 className="text-danger">Tìm Không thấy</h1> :
                        listContractPage.map((contract, index) => (
                            <tr key={index}>
                                <th scope="row">{contract.id}</th>
                                <td>{contract.name}</td>
                                <td>{contract.start}</td>
                                <td>{contract.finish}</td>
                                <td>{contract.price}</td>
                                <td>{typeList.find((type) => type.id === contract.idType)?.name}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
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