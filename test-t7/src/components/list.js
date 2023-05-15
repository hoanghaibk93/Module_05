import React, {useEffect, useState} from "react";
import * as studentService from '../service/studentService';
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ReactPaginate from "react-paginate";
import './page.css'
export function List() {
    const [studentList, setStudentList] = useState([]);
    const [typeList, setTypeList] = useState([]);
    const [studentData, setStudentData] = useState();
    const [perPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const fetchApi = async () => {
            let students = await studentService.findAllStudent();
            let types = await studentService.findAllType();
            setStudentList(students);
            setTypeList(types);
        };
        fetchApi();
    }, []);
    const getData = async (id) => {
        let data = await studentService.findById(id);
        setStudentData(data);
    };
    const handleDelete = async () => {
        await studentService.deleteStudent(studentData.id);
        let result = await studentService.findAllStudent();
        setStudentList(result);
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
    const searchByName = async () => {
        let name = document.getElementById('name1').value;
        let result = await studentService.searchByName(name);
        setStudentList(result);
    };
    const searchByType = async () => {
        let type = document.getElementById('type123').value;
        let result = await studentService.searchByType(type);
        setStudentList(result);
    };
    const searchByMuti = async () => {
        let type = document.getElementById('type123').value;
        let name = document.getElementById('name3').value;
        let result = await studentService.searchByMuti(type, name);
        setStudentList(result);
    };
    const pageCount = Math.ceil(studentList.length / perPage);
    const offset = currentPage * perPage;
    const currentStudent = studentList.slice(offset, offset + perPage);
    const handlePageClick = (pageCurrent) => {
        setCurrentPage(pageCurrent.selected);
    };
    return (
        <>
            <div>
                <input onChange={() => {
                    searchByName();
                }} aria-label="Search" className="form-control me-lg-2 m-4"
                       id='name1'
                       placeholder="Search by name"
                       type="text"
                />
            </div>
            <div>
                <label className="form-label">Sort theo loại</label>
                <select onChange={() => {
                    searchByType();
                }} aria-label="Default select example" className="form-select" id="type123">
                    {typeList.map((type, index) => (
                        <option key={index} value={type.id}>{type.name}</option>
                    ))}
                </select>
            </div>

            <div>
                <input onChange={() => {
                    searchByMuti();
                }} aria-label="Search" className="form-control me-lg-2 m-4"
                       id='name3'
                       placeholder="Search by name"
                       type="text"
                />
            </div>
            <Link to={'/create'} className="btn btn-info m-4">Tạo học sinh</Link>
            <h2 className="text-uppercase text-center mt-4">
                List học sinh
            </h2>
            <table className="table table-bordered w-75 m-auto ">
                <thead>
                <tr>
                    <th scope="col">Mã số</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Tuổi</th>
                    <th scope="col">Ngày sinh</th>
                    <th scope="col">Địa chỉ</th>
                    <th scope="col">Loại</th>
                    <th scope="col">Cập nhật</th>
                    <th scope="col">Xóa</th>
                </tr>
                </thead>
                <tbody>
                {
                    studentList.length === 0 ? <h1 className="text-danger">Không tìm thấy</h1> :
                        currentStudent.map((student, index) => (
                            <tr key={index}>
                                <th scope="row">{student.id}</th>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.date}</td>
                                <td>{student.address}</td>
                                <td>{typeList.find((type) => type.id === student.idType)?.name}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/update/${student.id}`}>Cập nhật</Link>
                                </td>
                                <td>
                                    <button onClick={() => {
                                        getData(student.id);
                                    }} className="btn btn-danger" data-bs-target="#exampleModal" data-bs-toggle="modal"
                                            type="button">
                                        Xóa
                                    </button>
                                    <div aria-hidden="true" aria-labelledby="exampleModalLabel" className="modal fade"
                                         id="exampleModal" tabIndex="-1">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                </div>
                                                <div className="modal-body">
                                                    <span>Bạn có muốn xóa sản phẩm </span> <span
                                                    className="text-danger">{studentData?.name}</span><span>không ?</span>
                                                </div>
                                                <div className="modal-footer">
                                                    <button className="btn btn-secondary" data-bs-dismiss="modal"
                                                            type="button">Đóng
                                                    </button>
                                                    <button onClick={() => {
                                                        handleDelete();
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