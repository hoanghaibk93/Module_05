import React, {useEffect, useState} from "react";
import * as productService from '../service/productService';
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import ReactPaginate from "react-paginate";

export function List() {
    const [productList, setProductList] = useState([]);
    const [productTypeList, setProductTypeList] = useState([]);
    const [productData, setProductData] = useState();
    //Phân trang
    const [currentPage, setCurrentPage] = useState(0);
    const [perPage] = useState(2);
    useEffect(() => {
        const fetchApi = async () => {
            let dataProduct = await productService.findAllProduct();
            let dataProductType = await productService.findAllProductType();
            setProductList(dataProduct);
            setProductTypeList(dataProductType);
        };
        fetchApi();
    }, []);
    const getData = async (id) => {
        let result = await productService.findById(id);
        setProductData(result);
    };
    const handlerDelete = async () => {
        await productService.deleteProduct(productData.id);
        let result = await productService.findAllProduct();
        setProductList(result);
        toast.success(`Xóa thành công `, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };
    const findByPriceGreater = async () => {
        let result = await productService.findAllGreaterPrice();
        console.log(result);
        setProductList(result);
    };
    const searchByName = async () => {
        let name = await document.getElementById('names').value;
        let result = await productService.searchByName(name);
        setProductList(result);
    };
    const searchByType = async () => {
        let types = document.getElementById('type').value;
        let result = await productService.searchByType(types);
        setProductList(result);
    };
    const searchMutilPro = async () => {
        let id = await document.getElementById('type').value;
        let name = await document.getElementById('typeAndName').value;

        let result = await productService.searchByTypeAndName(id, name);
        setProductList(result);
    };
    // Phần trang
    const handlePageClick = (selectedPage123) => {
        setCurrentPage(selectedPage123.selected);
    };
    const pageCount = Math.ceil(productList.length / perPage);
     const offset = currentPage * perPage;
     const  currentProducts= productList.slice(offset, offset + perPage)

    return (
        <>
            <button onClick={() => {
                findByPriceGreater();
            }} className="btn-danger">Tìm giá lớn hơn 300
            </button>

            <div>
                <input id='names' type="text"
                       aria-label="Search"
                       className="form-control me-lg-2 m-4"
                       placeholder="Search by name"
                       onChange={() => {
                           searchByName();
                       }}
                />
            </div>

            <div>
                <input id='typeAndName' type="text"
                       aria-label="Search"
                       className="form-control me-lg-2 m-4"
                       placeholder="Search by type and Name"
                       onChange={() => {
                           searchMutilPro();
                       }}
                />
            </div>

            <select aria-label="Default select example" className="form-select" id="type" onChange={() => {
                searchByType();
            }}>
                {productTypeList.map((typeSearch, index) => (
                    <option key={index} value={typeSearch.id}>{typeSearch.nameTypeProduct}</option>
                ))}

            </select>

            <Link to={`/create`}>Create product</Link>

            <h2 className="text-uppercase text-center mt-4">
                Product List
            </h2>


            <table className="table table-bordered w-75 m-auto ">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NAME PRODUCT</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">PRODUCT TYPE</th>
                    <th scope="col">UPDATE</th>
                    <th scope="col">DELETE</th>
                </tr>
                </thead>
                <tbody>
                {
                    productList.length === 0 ? <h1 className="text-danger">Không tìm thấy</h1> :
                        currentProducts.map((product, index) => (

                            <tr key={index}>
                                <th scope="row">{product.id}</th>
                                <td>{product.nameProduct}</td>
                                <td>{product.price}</td>
                                <td>{product.status}</td>
                                <td>{productTypeList.find((type) => type.id == product.idProductType)?.nameTypeProduct}</td>
                                <td>
                                    <Link to={`/update/${product.id}`} className="btn btn-danger">Cập nhật</Link>
                                </td>
                                <td>
                                    <button onClick={() => {
                                        getData(product.id);
                                    }} className="btn btn-danger" data-bs-target="#exampleModal" data-bs-toggle="modal"
                                            type="button">
                                        Xóa
                                    </button>
                                    <div aria-hidden="true" aria-labelledby="exampleModalLabel" className="modal fade"
                                         id="exampleModal" tabIndex="-1">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Xóa sản phẩm</h5>
                                                </div>
                                                <div className="modal-body">
                                                    <span>Bạn có muốn xóa sản phẩm </span> <span
                                                    className="text-danger">{productData?.nameProduct}</span><span> không ?</span>
                                                </div>
                                                <div className="modal-footer">
                                                    <button className="btn btn-secondary" data-bs-dismiss="modal"
                                                            type="button">Đóng
                                                    </button>
                                                    <button onClick={() => {
                                                        handlerDelete();
                                                    }} className="btn btn-primary" data-bs-dismiss="modal"
                                                            type="button">Xóa
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                <ReactPaginate
                    previousLabel={'trước'}
                    nextLabel={'sau'}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    breakLabel={'...'}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />

                </tbody>
            </table>
        </>
    );
}