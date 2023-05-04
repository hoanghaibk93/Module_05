import './serviceList.css';
import React, {useState} from "react";
import dataFurama from '../../data/dataFurama.json'
export function FacilityList() {
    // const dataFurama = require('../../data/dataFurama.json');
    const [facility, setFacility] = useState("");
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
            <div className="row container-fluid">

                {dataFurama.facilities.map((facility, index) => (
                        <div className="col-12 col-sm-6 col-md-3">


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
                                    <a className="btn btn-primary m-1">Cập nhật</a>
                                    <a className="btn btn-danger">Xóa</a>
                                </div>
                            </div>

                        </div>
                    )
                )}

            </div>

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
    );

}