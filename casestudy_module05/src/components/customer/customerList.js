import './customerList.css';
import React, {useEffect, useState} from "react";

import {toast} from "react-toastify";
import * as customerService from "../../service/customerService";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";

export function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [customerTypes, setCustomerTypes] = useState([]);
    const [customerDetail, setCustomerDetail] = useState();
    //Phân trang
    const [perPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(0);

    //Phân trang
    const pageCount = Math.ceil(customers.length / perPage);
    const offset = currentPage * perPage;
    const currentCustomerList = customers.slice(offset, offset + perPage);
    const handlePageClick = (pageCurrent) => {
        setCurrentPage(pageCurrent.selected);
    };
    useEffect(() => {
        const fetchApi = async () => {
            const listCustomer = await customerService.findAll();
            const listTypeCustomer = await customerService.findAllTypeCustomer();
            setCustomers(listCustomer);
            setCustomerTypes(listTypeCustomer);
        };
        fetchApi();
    }, []);
    const getData = async (id) => {
        const data = await customerService.getCustomer(id);
        setCustomerDetail(data);
    };
    const handleDelete = async () => {
        await customerService.deleteCustomer(customerDetail.id);
        let result = await customerService.findAll();
        setCustomers(result);
        toast.success(`Xóa ${customerDetail.name} thành công `, {
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
    if (!customers) {
        return null;
    }
    return (
        <>
            <>
                <section className="intro">
                    <div
                        className="bg-image h-100"
                        style={{
                            backgroundImage:
                                'url("image2/background.jpg")'
                        }}
                    >
                        <div
                            className="mask d-flex align-items-center h-100"
                            style={{backgroundColor: "rgba(0,0,0,.25)"}}
                        >
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-12">
                                        <div className="form2 bg-dark shadow-2-strong">
                                            <div className="form2-body">
                                                <h1 className="text-light text-center" style={{zIndex: 2}}>
                                                    DANH SÁCH KHÁCH HÀNG
                                                </h1>
                                                <div className="table-responsive">
                                                    <table className="table table-dark table-borderless mb-0">
                                                        <thead>
                                                        <tr>
                                                            <th scope="col">HỌ VÀ TÊN</th>
                                                            <th scope="col">NGÀY SINH</th>
                                                            <th scope="col">GIỚI TÍNH</th>
                                                            <th scope="col">SỐ CMND</th>
                                                            <th scope="col">SỐ ĐIỆN THOẠI</th>
                                                            <th scope="col">EMAIL</th>
                                                            <th scope="col">LOẠI KHÁCH</th>
                                                            <th scope="col">ĐỊA CHỈ</th>
                                                            <th colSpan={2} style={{textAlign: "center"}}>
                                                                TÁC VỤ
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {currentCustomerList.map((customer, index) => (
                                                            <tr key={index}>
                                                                <th scope="row">{customer.name}</th>
                                                                <td>{customer.dateOfBirth}</td>
                                                                <td>{customer.gender}</td>
                                                                <td>{customer.iDCard}</td>
                                                                <td>{customer.phoneNumber}</td>
                                                                <td>{customer.email}</td>
                                                                {/*<td>{customer.typeCustomer}</td>*/}
                                                                <td>
                                                                    {customerTypes.find(typeCustomer123 => customer.typeCustomer === typeCustomer123.id)?.name}
                                                                </td>
                                                                <td>{customer.address}</td>
                                                                <td>
                                                                    <Link to={`/customerUpdate/${customer.id}`}
                                                                          className="btn btn-primary">Cập
                                                                        nhật</Link>
                                                                </td>
                                                                <td>
                                                                    {/* Modal */}
                                                                    <button onClick={() => getData(customer.id)}
                                                                            type="button" className="btn btn-danger"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#exampleModal">
                                                                        Xóa
                                                                    </button>
                                                                    {/*xóa modal*/}
                                                                    <div className="modal fade" id="exampleModal"
                                                                         tabIndex="-1"
                                                                         aria-labelledby="exampleModalLabel"
                                                                         aria-hidden="true">
                                                                        <div className="modal-dialog">
                                                                            <div className="modal-content">
                                                                                <div className="modal-header">
                                                                                    <h2 className="modal-title text-dark"
                                                                                        id="exampleModalLabel">Xóa khách
                                                                                        hàng</h2>
                                                                                    {/*<button type="button" className="btn-close" data-bs-dismiss="modal"*/}
                                                                                    {/*        aria-label="Close"></button>*/}
                                                                                </div>
                                                                                <div className="modal-body fs-4">
                                                                                    <span className="color">Bạn có muốn xóa </span>
                                                                                    <span
                                                                                        className="text-danger">{customerDetail?.name}</span>
                                                                                    <span className="color"> không?</span>
                                                                                </div>
                                                                                <div className="modal-footer">
                                                                                    <button type="button"
                                                                                            className="btn btn-secondary"
                                                                                            data-bs-dismiss="modal">Đóng
                                                                                    </button>
                                                                                    <button
                                                                                        onClick={() => handleDelete()}
                                                                                        type="button"
                                                                                        className="btn btn-danger"
                                                                                        data-bs-dismiss="modal">Xóa
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/*                <a class="btn btn-danger">Xóa</a>*/}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ReactPaginate
                    onPageChange={handlePageClick}
                    pageCount={pageCount}
                    activeClassName={'active'}
                    containerClassName={'pagination'}
                    marginPagesDisplayed={2}
                    previousLabel={'Trước'}
                    nextLabel={'Sau'}
                    pageClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                />
            </>

        </>
    );
}

