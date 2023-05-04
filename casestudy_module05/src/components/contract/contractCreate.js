export function ContractCreate() {
    return (
        <>
            <section
                className="bg-image"
                style={{
                    backgroundImage:
                        'url("https://mdbootstrap.com/img/Photos/new-templates/tables/img2.jpg")'
                }}
            >
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="form" style={{ borderRadius: 15 }}>
                                    <div className="form-body p-5">
                                        <h2 className="text-uppercase text-center mt-4">
                                            Thêm mới hợp đồng
                                        </h2>
                                        <form>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example1cg">
                                                    Mã hợp đồng
                                                </label>
                                                <span className="text-danger">*</span>
                                                <input
                                                    type="text"
                                                    id="form3Example1cg"
                                                    className="form-control form-control-lg"
                                                />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">
                                                    Khách hàng
                                                </label>
                                                <span className="text-danger">*</span>
                                                <input
                                                    type="text"
                                                    id="form3Example3cg"
                                                    className="form-control form-control-lg"
                                                />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4cg">
                                                    Dịch vụ
                                                </label>
                                                <span className="text-danger">*</span>
                                                <input
                                                    type="text"
                                                    id="form3Example4cg"
                                                    className="form-control form-control-lg"
                                                />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4cdg">
                                                    Ngày làm hợp đồng
                                                </label>
                                                <span className="text-danger">*</span>
                                                <input
                                                    type="date"
                                                    id="form3Example4cdg"
                                                    className="form-control form-control-lg"
                                                />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form4Example4cdg">
                                                    Ngày kết thúc hợp đồng
                                                </label>
                                                <span className="text-danger">*</span>
                                                <input
                                                    type="date"
                                                    id="form4Example4cdg"
                                                    className="form-control form-control-lg"
                                                />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form9Example4cdg">
                                                    Tiền đặt cọc
                                                </label>
                                                <span className="text-danger">*</span>
                                                <input
                                                    type="number"
                                                    id="form9Example4cdg"
                                                    className="form-control form-control-lg"
                                                />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form10Example4cdg">
                                                    Tổng tiền
                                                </label>
                                                <span className="text-danger">*</span>
                                                <input
                                                    type="number"
                                                    id="form10Example4cdg"
                                                    className="form-control form-control-lg"
                                                />
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button
                                                    type="button"
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                >
                                                    Thêm mới{" "}
                                                </button>
                                            </div>
                                        </form>
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