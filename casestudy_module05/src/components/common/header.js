import {Component} from "react";
import {ListImg} from "../../image";
import './header.css'
export class Header extends Component {
    render() {
        return (
            <>
                <nav
                    className="navbar navbar-expand-lg navbar-light text-white"
                    style={{backgroundColor: "#45526e"}}
                >
                    <div className="container-fluid">
                        <img
                            alt="..."
                            className="navbar-brand"
                            height={40}
                            src={ListImg.logo}
                            width={100}
                        />
                        <button
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            className="navbar-toggler"
                            data-bs-target="#navbarSupportedContent"
                            data-bs-toggle="collapse"
                            type="button"
                        >
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <a
                                        aria-current="page"
                                        className="nav-link active text-white"
                                        href="#"
                                    >
                                        Trang chủ
                                    </a>
                                </li>
                                <li className="nav-item dropdown ">
                                    <a
                                        aria-expanded="false"
                                        className="nav-link dropdown-toggle text-white"
                                        data-bs-toggle="dropdown"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                    >
                                        | Villa
                                    </a>
                                    <ul aria-labelledby="navbarDropdown" className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Hướng vườn
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Hướng biển
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Hướng trực diện biển
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">
                                        | House
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">
                                        | Room
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">
                                        | Tiện ích
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">
                                        | Tin tức
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">
                                        | Liên hệ
                                    </a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input
                                    aria-label="Search"
                                    className="form-control me-lg-2"
                                    placeholder="Search"
                                    style={{width: 300}}
                                    type="search"
                                />
                                <button className="btn btn-outline-success text-white" type="submit">
                                    Search
                                </button>
                            </form>
                            <svg
                                className="bi bi-telephone-fill"
                                fill="currentColor"
                                height={16}
                                viewBox="0 0 16 16"
                                width={16}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                    fillRule="evenodd"
                                />
                            </svg>
                            <span>0911899574</span>
                            <svg
                                className="bi bi-door-open"
                                fill="currentColor"
                                height={16}
                                viewBox="0 0 16 16"
                                width={16}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                                <path
                                    d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
                            </svg>
                            <svg
                                className="bi bi-box-arrow-right"
                                fill="currentColor"
                                height={16}
                                viewBox="0 0 16 16"
                                width={16}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                                    fillRule="evenodd"
                                />
                                <path
                                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                                    fillRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                </nav>

            </>
        );
    }
}
