import {Component} from "react";
import './customerList.css'
export class CustomerList extends Component {
    render() {
        return (
            <>
                <>
                    <section className="intro">
                        <div
                            className="bg-image h-100"
                            style={{
                                backgroundImage:
                                    'url("https://mdbootstrap.com/img/Photos/new-templates/tables/img2.jpg")'
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
                                                            <tr>
                                                                <th scope="row">Đoàn Thành Tiến</th>
                                                                <td>1993/03/09</td>
                                                                <td>Nam</td>
                                                                <td>191796571</td>
                                                                <td>0911899190</td>
                                                                <td>tienDoan123@gmail.com</td>
                                                                <td>Platinium</td>
                                                                <td>13 Trần Hưng Đạo, Huế</td>
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
                                                            <tr>
                                                                <th scope="row">Ngô Văn Vũ</th>
                                                                <td>1990/10/20</td>
                                                                <td>Nam</td>
                                                                <td>191794681</td>
                                                                <td>0911899581</td>
                                                                <td>VuNgo@gmail.com</td>
                                                                <td>Dinamond</td>
                                                                <td>14 Phan Bội Châu, Đà Nẳng</td>
                                                                <td>
                                                                    <button className="btn btn-primary" type="button">
                                                                        Cập nhật
                                                                    </button>
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-danger" type="button">
                                                                        Xóa
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Phạm Thị ÁNh Phúc</th>
                                                                <td>2000/10/10</td>
                                                                <td>Nữ</td>
                                                                <td>191794091</td>
                                                                <td>0911234581</td>
                                                                <td>Phuc.Pham897@gmail.com</td>
                                                                <td>Gold</td>
                                                                <td>20 Trần Hưng Đạo, Hồ Chí Minh</td>
                                                                <td>
                                                                    <button className="btn btn-primary" type="button">
                                                                        Cập nhật
                                                                    </button>
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-danger" type="button">
                                                                        Xóa
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Hồ Thị Thu Thảo</th>
                                                                <td>1993/09/08</td>
                                                                <td>Nữ</td>
                                                                <td>191791081</td>
                                                                <td>0911890981</td>
                                                                <td>Thao.Ho@gmail.com</td>
                                                                <td>Dinamond</td>
                                                                <td>50 Đống Đa, Huế</td>
                                                                <td>
                                                                    <button className="btn btn-primary" type="button">
                                                                        Cập nhật
                                                                    </button>
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-danger" type="button">
                                                                        Xóa
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Trần Văn Thanh</th>
                                                                <td>2001/09/15</td>
                                                                <td>Nam</td>
                                                                <td>191714681</td>
                                                                <td>0911801581</td>
                                                                <td>Thanh.Tran123@gmail.com</td>
                                                                <td>Dinamond</td>
                                                                <td>23 Phan Thúc Duyện, Đà Nẳng</td>
                                                                <td>
                                                                    <button className="btn btn-primary" type="button">
                                                                        Cập nhật
                                                                    </button>
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-danger" type="button">
                                                                        Xóa
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Hoàng Tất Đạt</th>
                                                                <td>2005/01/01</td>
                                                                <td>Nam</td>
                                                                <td>191791291</td>
                                                                <td>0911899181</td>
                                                                <td>Dat.hoang123@gmail.com</td>
                                                                <td>Gold</td>
                                                                <td>60 Trường Chinh, Đà Nẳng</td>
                                                                <td>
                                                                    <button className="btn btn-primary" type="button">
                                                                        Cập nhật
                                                                    </button>
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-danger" type="button">
                                                                        Xóa
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Trần Thị Tín</th>
                                                                <td>2005/10/20</td>
                                                                <td>Nữ</td>
                                                                <td>191794891</td>
                                                                <td>0911899891</td>
                                                                <td>tin.tran891@gmail.com</td>
                                                                <td>Dinamond</td>
                                                                <td>05 Trần Văn Dư, Huế</td>
                                                                <td>
                                                                    <button className="btn btn-primary" type="button">
                                                                        Cập nhật
                                                                    </button>
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-danger" type="button">
                                                                        Xóa
                                                                    </button>
                                                                </td>
                                                            </tr>
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
}
