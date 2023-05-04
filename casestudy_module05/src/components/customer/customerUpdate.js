export function CustomerUpdate() {
    return (
        <>
            <section
                className="bg-image"
                style={{
                    backgroundImage:
                        'url("image2/background.jpg")'
                }}
            >
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="form" style={{borderRadius: 15}}>
                                    <div className="form-body p-5">
                                        <h2 className="text-uppercase text-center mt-4">
                                            Cập nhật khách hàng
                                        </h2>
                                        <form>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example1cg">
                                                    Họ và tên
                                                </label>
                                                <span className="text-danger">*</span>
                                                <input
                                                    className="form-control form-control-lg"
                                                    id="form3Example1cg"
                                                    type="text"
                                                />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">
                                                    Ngày sinh
                                                </label>
                                                <span className="text-danger">*</span>
                                                <input
                                                    className="form-control form-control-lg"
                                                    id="form3Example3cg"
                                                    type="date"
                                                />
                                            </div>
                                            <label className="form-label">Giới tính</label>
                                            <span className="text-danger">*</span>
                                            <div
                                                className="form-check form-check-inline"
                                                style={{marginLeft: 20}}
                                            >
                                                <input
                                                    className="form-check-input"
                                                    id="inlineRadio1"
                                                    name="inlineRadioOptions"
                                                    type="radio"
                                                    defaultValue="option1"
                                                />
                                                <label className="form-check-label" htmlFor="inlineRadio1">
                                                    Nam
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    id="inlineRadio2"
                                                    name="inlineRadioOptions"
                                                    type="radio"
                                                    defaultValue="option2"
                                                />
                                                <label className="form-check-label" htmlFor="inlineRadio2">
                                                    Nữ
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    id="inlineRadio3"
                                                    name="inlineRadioOptions"
                                                    type="radio"
                                                    defaultValue="option3"
                                                />
                                                <label className="form-check-label" htmlFor="inlineRadio3">
                                                    Khác
                                                </label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4cdg">
                                                    Số CMND
                                                </label>
                                                <span className="text-danger">*</span>
                                                <input
                                                    className="form-control form-control-lg"
                                                    id="form3Example4cdg"
                                                    type="number"
                                                />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form5Examplecdg">
                                                    Số điện thoại
                                                </label>
                                                <span className="text-danger">*</span>
                                                <input
                                                    className="form-control form-control-lg"
                                                    id="form5Examplecdg"
                                                    type="number"
                                                />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form7Example4cdg">
                                                    Email
                                                </label>
                                                <span className="text-danger">*</span>
                                                <input
                                                    className="form-control form-control-lg"
                                                    id="form7Example4cdg"
                                                    type="text"
                                                />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form8Example4cdg">
                                                    Địa chỉ
                                                </label>
                                                <span className="text-danger">*</span>
                                                <input
                                                    className="form-control form-control-lg"
                                                    id="form8Example4cdg"
                                                    type="text"
                                                />
                                            </div>
                                            <label className="form-label">Loại khách</label>
                                            <span className="text-danger">*</span>
                                            <select
                                                aria-label="Default select example"
                                                className="form-select"
                                                style={{height: 50, marginBottom: 30}}
                                            >
                                                <option selected="" value={1}>
                                                    One
                                                </option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                            <div className="d-flex justify-content-center">
                                                <button
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                    type="button"
                                                >
                                                    Cập nhật
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