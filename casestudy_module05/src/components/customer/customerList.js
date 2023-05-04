import './customerList.css';
import dataFurama from '../../data/dataFurama.json';

export function CustomerList() {
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
                                                        {dataFurama.customers.map((customer, index) => (
                                                            <tr key={index}>
                                                                <th scope="row">{customer.name}</th>
                                                                <td>{customer.dateOfBirth}</td>
                                                                <td>{customer.gender}</td>
                                                                <td>{customer.iDCard}</td>
                                                                <td>{customer.phoneNumber}</td>
                                                                <td>{customer.email}</td>
                                                                <td>{customer.typeCustomer}</td>
                                                                <td>{customer.address}</td>
                                                                <td>
                                                                    <button className="btn btn-primary" type="button">
                                                                        Cập nhật
                                                                    </button>
                                                                </td>
                                                                <td>
                                                                    {/* Button trigger modal */}
                                                                    <button
                                                                        className="btn btn-danger"
                                                                        data-bs-target="#exampleModal"
                                                                        data-bs-toggle="modal"
                                                                        type="button"
                                                                    >
                                                                        Xóa
                                                                    </button>
                                                                    {/* Modal */}
                                                                    <div
                                                                        aria-hidden="true"
                                                                        aria-labelledby="exampleModalLabel"
                                                                        className="modal fade"
                                                                        id="exampleModal"
                                                                        tabIndex={-1}
                                                                    >
                                                                        <div className="modal-dialog">
                                                                            <div className="modal-content">
                                                                                <div className="modal-header">
                                                                                    <h5
                                                                                        className="modal-title"
                                                                                        id="exampleModalLabel"
                                                                                    >
                                                                                        Modal title
                                                                                    </h5>
                                                                                    <button
                                                                                        aria-label="Close"
                                                                                        className="btn-close"
                                                                                        data-bs-dismiss="modal"
                                                                                        type="button"
                                                                                    />
                                                                                </div>
                                                                                <div className="modal-body">...</div>
                                                                                <div className="modal-footer">
                                                                                    <button
                                                                                        className="btn btn-secondary"
                                                                                        data-bs-dismiss="modal"
                                                                                        type="button"
                                                                                    >
                                                                                        Close
                                                                                    </button>
                                                                                    <button
                                                                                        className="btn btn-primary"
                                                                                        type="button"
                                                                                    >
                                                                                        Save changes
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
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center m-3">
                        <li className="page-item">
                            <a className="page-link" href="#">
                                Previous
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                2
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                3
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </>

        </>
    );
}

