import 'react-toastify/dist/ReactToastify.css';
import React, {useEffect, useState} from "react";
import * as serviceProduct from "../service/serviceProduct";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function List() {
    const [listProduct, setListProduct] = useState([]);
    const [listType, setListType] = useState([]);
    const [productData, setProductData] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            let resultProduct = await serviceProduct.findAllProduct();
            let resultType = await serviceProduct.findAllType();
            setListProduct(resultProduct);
            setListType(resultType);
        };
        fetchApi();
    }, []);

    const searchByName = async () => {
        let name = await document.getElementById('name').value;
        if(!name){
            let result = serviceProduct.findAllProduct();
            setListProduct(result);
        } else {
            let result = await serviceProduct.searchByName(name);
            setListProduct(result);
        }
    };
    // const searchByType = async () => {
    //     let type = await document.getElementById('type').value;
    //     let result = await serviceProduct.searchByType(type);
    //     setListProduct(result);
    // };
    // const searchByTypeAndName = async () => {
    //     let type = await document.getElementById('type').value;
    //     let name = await document.getElementById('name2').value;
    //     let result = await serviceProduct.searchByMuti(type, name);
    //     setListProduct(result);
    // };
    const getData = async (id) => {
        let data = await serviceProduct.findById(id);
        setProductData(data);
    };
    const handlerDelete = async () => {
        await serviceProduct.deleteProduct(productData.id);
        let result = await serviceProduct.findAllProduct();
        setListProduct(result);
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
    return (
        <>
            <div>
                <input onChange={() => {
                    searchByName();
                }} aria-label="Search" className="form-control me-lg-2 m-4"
                       id='name'
                       placeholder="Search by name"
                       type="text"
                />
            </div>
            {/*<div>*/}
            {/*    <input onChange={() => {*/}
            {/*        searchByTypeAndName();*/}
            {/*    }} aria-label="Search" className="form-control me-lg-2 m-4"*/}
            {/*           id='name2'*/}
            {/*           placeholder="Search by name and type"*/}
            {/*           type="text"*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <label className="form-label">Search by type</label>*/}
            {/*    <select onChange={() => {*/}
            {/*        searchByType();*/}
            {/*    }} aria-label="Default select example" className="form-select" id="type">*/}
            {/*        {listType.map((type, index) => (*/}
            {/*            <option value={type.id}>{type.name}</option>*/}
            {/*        ))}*/}

            {/*    </select>*/}
            {/*</div>*/}
            <Link to={`/create`} >Create Product</Link>
            <h2 className="text-uppercase text-center mt-4">
                List Product
            </h2>
            <table className="table table-bordered w-75 m-auto ">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">DATE</th>
                    <th scope="col">QUALITY</th>
                    <th scope="col">TYPE</th>
                    <th scope="col">UPDATE</th>
                    <th scope="col">DELETE</th>
                </tr>
                </thead>
                <tbody>
                {listProduct.length === 0 ? <h1 className="text-danger">Không tìm thấy</h1> :
                    listProduct.map((product, index) => (
                        <tr key={index}>
                            <th scope="row">{product.id}</th>
                            <td>{product.name}</td>
                            <td>{product.date}</td>
                            <td>{product.quality}</td>
                            <td>{product.productType?.nameProduct}</td>
                            <td>
                                {/*<Link to={'/update/{product.id}'} className="btn btn-info">Update</Link>*/}
                                <Link to={`/update/${product.id}`} className="btn btn-info">Update</Link>

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
                                                className="text-danger">{productData?.name}</span><span> không ?</span>
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
                </tbody>
            </table>

        </>
    );
}