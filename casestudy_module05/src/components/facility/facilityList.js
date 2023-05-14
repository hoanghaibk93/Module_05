import './serviceList.css';
import React, {useEffect, useState} from "react";
import * as facilityService from "../../service/facilityService";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import ReactPaginate from "react-paginate";

export function FacilityList() {

    const [facilitys, setFacilitys] = useState([]);
    const [facilityDetail, setFacilityDetail] = useState();
    //Tìm kiếm
    const [typeFacilityList, setTypeFacilityList] = useState([]);
    //Phân trang
    const [perPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const fetchApi = async () => {
            const listFacility = await facilityService.findAll();
            setFacilitys(listFacility);
            //tìm kiếm
            const resultTypeFacility = await facilityService.findAllTypeFacility();
            setTypeFacilityList(resultTypeFacility);
        };
        fetchApi();
    }, []);
    const getData = async (id) => {
        const data = await facilityService.getFacility(id);
        setFacilityDetail(data);
    };
    const handleDelete = async () => {
        await facilityService.deleteFacility(facilityDetail.id);
        let result = await facilityService.findAll();
        setFacilitys(result);
        toast.success(`Xóa ${facilityDetail.nameFacility} thành công `, {
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
    const handleSearch = async () => {
        let name = document.getElementById('nameFacility').value;
        const result = await facilityService.findByName(name);
        setFacilitys(result);
    };
    const handleSearchByFacilityType = async () => {
        let type = document.getElementById('typeFacility123').value;
        const result = await facilityService.findByFacilityType(type);
        setFacilitys(result);
    };
    const handleSearchByTypeAndName= async () => {
        let type = document.getElementById('typeFacility123').value;
        let name = document.getElementById('name2').value;
        const result = await facilityService.findByTypeAnhName(type,name);
        setFacilitys(result);
    };
    //sắp xếp
    const sortByArea = async () => {
        const listFacilitySort = await facilityService.findAllSortArea();
        setFacilitys(listFacilitySort);
    };
    //Phân trang
    const pageCount = Math.ceil(facilitys.length / perPage);
    const offset = currentPage * perPage;
    const currentFacilityList = facilitys.slice(offset, offset + perPage);
    const handlePageClick = (pageCurrent) => {
        setCurrentPage(pageCurrent.selected);
    };

    // if (!facilitys) {
    //     return null;
    // }
    return (
        <>
            <div
                className="carousel slide"
                data-bs-ride="carousel"
                id="carouselExampleCaptions"
            >
                <div className="carousel-indicators">
                    <button
                        aria-current="true"
                        aria-label="Slide 1"
                        className="active"
                        data-bs-slide-to={0}
                        data-bs-target="#carouselExampleCaptions"
                        type="button"
                    />
                    <button
                        aria-label="Slide 2"
                        data-bs-slide-to={1}
                        data-bs-target="#carouselExampleCaptions"
                        type="button"
                    />
                    <button
                        aria-label="Slide 3"
                        data-bs-slide-to={2}
                        data-bs-target="#carouselExampleCaptions"
                        type="button"
                    />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            alt="..."
                            className="d-block w-100"
                            src="https://furama-booking.com/wp-content/uploads/2022/08/Website-FU-1-1536x577.png"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            alt="..."
                            className="d-block w-100"
                            src="https://furama-booking.com/wp-content/uploads/2022/08/FURAMA-1-2240-%C3%97-980-px-1-1536x583.png"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            alt="..."
                            className="d-block w-100"
                            src="https://furama-booking.com/wp-content/uploads/2022/08/Website-FU-1-1536x577.png"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    data-bs-slide="prev"
                    data-bs-target="#carouselExampleCaptions"
                    type="button"
                >
                    <span aria-hidden="true" className="carousel-control-prev-icon"/>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    data-bs-slide="next"
                    data-bs-target="#carouselExampleCaptions"
                    type="button"
                >
                    <span aria-hidden="true" className="carousel-control-next-icon"/>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="d-inline-flex mt-4">
                <div className="me-3">
                    <select className="form-select" aria-label="Default select example" id="typeFacility123"
                            onChange={() => {
                                handleSearchByFacilityType();
                            }}>
                        {typeFacilityList.map((type, index) => (
                            <option key={index} value={type.id}>{type.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <input onChange={() => {
                        handleSearch();
                    }} id='nameFacility' type="text"
                           aria-label="Search"
                           className="form-control me-lg-2"
                           placeholder="Search by name"
                           style={{width: 300}}/>
                </div>
                <div>
                    <input onChange={() => {
                        handleSearchByTypeAndName();
                    }} id='name2' type="text"
                           aria-label="Search"
                           className="form-control me-lg-2"
                           placeholder="Search by Type and Name"
                           style={{width: 300}}/>
                </div>
                <div>
                    <button type="button" onClick={() => {
                        sortByArea();
                    }} className="btn btn-outline-secondary">Sắp Xếp theo diện tích
                    </button>
                </div>
            </div>

            <div className="row container-fluid">

                {
                    facilitys.length === 0 ? <h1 className="text-danger text-center">Không tìm thấy</h1> :
                        currentFacilityList.map((facility, index) => (
                                <div key={index} className="col-12 col-sm-6 col-md-3">


                                    <div className="card">
                                        <img alt="..." className="card-img-top" src={facility.img}/>
                                        <div className="card-body">
                                            <div>
                                                <h5 className="card-title">{facility.nameFacility}</h5>
                                                <div className="card-detail">
                                                    <h6 className="card-subtitle mb-2 text-muted">
                                                        Room size: {facility.usableArea}m2
                                                    </h6>
                                                    <svg
                                                        className="bi bi-exclamation-circle"
                                                        fill="currentColor"
                                                        height={12}
                                                        viewBox="0 0 16 16"
                                                        width={16}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                        <path
                                                            d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                                                    </svg>
                                                    <p
                                                        className="card-subtitle mb-1 text-muted"
                                                        style={{fontSize: "small"}}
                                                    >
                                                        Xem thêm
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer text-center">
                                            <Link to={`/updateFacility/${facility.id}/${facility.typeFacility}`}
                                                  className="btn btn-primary m-1">Cập nhật</Link>
                                            <button onClick={() => getData(facility.id)} type="button"
                                                    className="btn btn-danger"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">
                                                Xóa
                                            </button>
                                            {/*xóa modal*/}
                                            <div className="modal fade" id="exampleModal" tabIndex="-1"
                                                 aria-labelledby="exampleModalLabel"
                                                 aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h2 className="modal-title" id="exampleModalLabel">Xóa dịch
                                                                vụ</h2>
                                                            {/*<button type="button" className="btn-close" data-bs-dismiss="modal"*/}
                                                            {/*        aria-label="Close"></button>*/}
                                                        </div>
                                                        <div className="modal-body fs-3">
                                                            <span>Bạn có muốn xóa </span> <span
                                                            className="text-danger">{facilityDetail?.nameFacility}</span>
                                                            <span> không?</span>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary"
                                                                    data-bs-dismiss="modal">Đóng
                                                            </button>
                                                            <button onClick={() => handleDelete()} type="button"
                                                                    className="btn btn-primary" data-bs-dismiss="modal">Xóa
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        )}

            </div>

            {/*<ToastContainer/>*/}

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
    );

}