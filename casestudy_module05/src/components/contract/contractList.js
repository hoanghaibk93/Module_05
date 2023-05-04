export function ContractList() {
    return (
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
                        style={{ backgroundColor: "rgba(0,0,0,.25)" }}
                    >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="form2 bg-dark shadow-2-strong">
                                        <div className="form2-body">
                                            <h1 className="text-light text-center" style={{ zIndex: 2 }}>
                                                DANH SÁCH HỢP ĐỒNG
                                            </h1>
                                            <div className="table-responsive">
                                                <table className="table table-dark table-borderless mb-0">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">Mã HỢP ĐỒNG</th>
                                                        <th scope="col">KHÁCH HÀNG</th>
                                                        <th scope="col">DỊCH VỤ</th>
                                                        <th scope="col">NGÀY LÀM HỢP ĐỒNG</th>
                                                        <th scope="col">NGÀY KẾT THÚC HỢP ĐỒNG</th>
                                                        <th scope="col">TIỀN ĐẶT CỌC</th>
                                                        <th scope="col">TỔNG TIỀN</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Đoàn Thành Tiến</td>
                                                        <td>Villa</td>
                                                        <td>2022/03/04</td>
                                                        <td>2022/03/06</td>
                                                        <td>
                                                            1000000
                                                            <span>VND</span>
                                                        </td>
                                                        <td>
                                                            3000000
                                                            <span>VND</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Ngô Văn Vũ</td>
                                                        <td>House</td>
                                                        <td>2022/03/04</td>
                                                        <td>2022/03/06</td>
                                                        <td>
                                                            1000000
                                                            <span>VND</span>
                                                        </td>
                                                        <td>
                                                            3000000
                                                            <span>VND</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Phạm Thị Ánh Phúc</td>
                                                        <td>Phòng</td>
                                                        <td>2022/03/04</td>
                                                        <td>2022/03/06</td>
                                                        <td>
                                                            1000000
                                                            <span>VND</span>
                                                        </td>
                                                        <td>
                                                            3000000
                                                            <span>VND</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">4</th>
                                                        <td>Hồ Thị Thu Thảo</td>
                                                        <td>Villa</td>
                                                        <td>2022/03/04</td>
                                                        <td>2022/03/06</td>
                                                        <td>
                                                            1000000
                                                            <span>VND</span>
                                                        </td>
                                                        <td>
                                                            3000000
                                                            <span>VND</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">5</th>
                                                        <td>Trần Văn Thanh</td>
                                                        <td>House</td>
                                                        <td>2022/03/04</td>
                                                        <td>2022/03/06</td>
                                                        <td>
                                                            1000000
                                                            <span>VND</span>
                                                        </td>
                                                        <td>
                                                            3000000
                                                            <span>VND</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">6</th>
                                                        <td>Hoàng Tất Đạt</td>
                                                        <td>Phòng</td>
                                                        <td>2022/03/04</td>
                                                        <td>2022/03/06</td>
                                                        <td>
                                                            1000000
                                                            <span>VND</span>
                                                        </td>
                                                        <td>
                                                            3000000
                                                            <span>VND</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">7</th>
                                                        <td>Trần Thị Tín</td>
                                                        <td>Villa</td>
                                                        <td>2022/03/04</td>
                                                        <td>2022/03/06</td>
                                                        <td>
                                                            1000000
                                                            <span>VND</span>
                                                        </td>
                                                        <td>
                                                            3000000
                                                            <span>VND</span>
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

        </>
    );
}