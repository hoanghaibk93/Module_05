import 'react-toastify/dist/ReactToastify.css';
import React, {useEffect, useState} from "react";
import * as serviceProduct from "../service/serviceProduct";
import {Link} from "react-router-dom";

export function List() {
    const [listProduct, setListProduct] = useState([]);
    const [listType, setListType] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            let resultProduct = await serviceProduct.findAllProduct();
            let resultType = await serviceProduct.findAllType();
            setListProduct(resultProduct);
            setListType(resultType);
        };
        fetchApi();
    },[]);

    // const searchByName = async () => {
    //     let name = await document.getElementById('name').value;
    //     let result = await serviceProduct.searchByName(name);
    //     setListProduct(result);
    // };
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
    return (
        <>
            {/*<div>*/}
            {/*    <input onChange={() => {*/}
            {/*        searchByName();*/}
            {/*    }} aria-label="Search" className="form-control me-lg-2 m-4"*/}
            {/*           id='name'*/}
            {/*           placeholder="Search by name"*/}
            {/*           type="text"*/}
            {/*    />*/}
            {/*</div>*/}
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
                </tr>
                </thead>
                <tbody>
                {listProduct.length===0 ? <h1 className="text-danger">Không tìm thấy</h1>:
                    listProduct.map((product, index) => (
                    <tr key={index}>
                        <th scope="row">{product.id}</th>
                        <td>{product.name}</td>
                        <td>{product.date}</td>
                        <td>{product.quality}</td>
                        <td>{listType.find((type) => {
                            return type.idType == product.productType.idType;
                        })?.nameProduct}</td>
                        <td>
                            {/*<Link to={'/update/{product.id}'} className="btn btn-info">Update</Link>*/}
                            <Link to={`/update/${product.id}`} className="btn btn-info">Update</Link>

                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

        </>
    );
}