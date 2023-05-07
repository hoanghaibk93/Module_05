import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {toast, ToastContainer} from "react-toastify";
import {Vortex} from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
export function CustomerUpdate() {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    dateOfBirth: '',
                    gender: '0',
                    iDCard: '',
                    phoneNumber: '',
                    email: '',
                    typeCustomer: '',
                    address: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Tên không được để trống, vui lòng nhập tên')
                        .matches(/^[A-Z][a-z]*( [A-Z][a-z]*)*$/, 'Tên phải đúng theo định dạng không có số, các ký tự đàu tiên của mỗi từ phải viết hoa'),
                    dateOfBirth: Yup.string()
                        .required('Ngày sinh không được để trống'),
                    iDCard: Yup.string()
                        .required('CCCN không được để trống')
                        .matches(/\b\d{9}\b|\b\d{12}\b/, 'CCCN phải đúng theo định dạng, 9 hoặc 12 số'),
                    phoneNumber: Yup.string()
                        .required('Số điện thoại không được để trống')
                        .matches(/(^090\d{7}$)|(^091\d{7}$)|(^\(84\)\+90\d{7}$)|(^\(84\)\+91\d{7}$)/, 'Số điện thoại phải đúng định dạng 090xxxxxxx hoặc 091xxxxxxx hoặc (84)+90xxxxxxx hoặc (84)+91xxxxxxx'),
                    email: Yup.string()
                        .required('Email không được để trống')
                        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,'Email phải đúng định dạng Example@gmail.com')

                })}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        console.log(values);
                        setSubmitting(false);
                        toast.success(`Cập nhật ${values.name} thành công `, {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                    }, 1000);
                }}>
                {
                    ({isSubmitting}) => (
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
                                                    <Form>
                                                        <div className="form-outline mb-4">
                                                            <label className="form-label" htmlFor="form3Example1cg">
                                                                Họ và tên
                                                            </label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                className="form-control form-control-lg"
                                                                id="form3Example1cg"
                                                                type="text"
                                                                name="name"
                                                            />
                                                        </div>
                                                        <ErrorMessage name='name' component='span'
                                                                      className='form-err'/>
                                                        <div className="form-outline mb-4">
                                                            <label className="form-label" htmlFor="form3Example3cg">
                                                                Ngày sinh
                                                            </label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                className="form-control form-control-lg"
                                                                id="form3Example3cg"
                                                                type="date"
                                                                name="dateOfBirth"
                                                            />
                                                        </div>
                                                        <ErrorMessage name='dateOfBirth' component='span'
                                                                      className='form-err'/>
                                                        <div>
                                                            <label className="form-label">Giới tính</label>
                                                            <span className="text-danger">*</span>
                                                            <div
                                                                className="form-check form-check-inline"
                                                                style={{marginLeft: 20}}
                                                            >
                                                                <Field
                                                                    className="form-check-input"
                                                                    id="inlineRadio1"
                                                                    name="gender"
                                                                    type="radio"
                                                                    value="0"
                                                                />
                                                                <label className="form-check-label"
                                                                       htmlFor="inlineRadio1">
                                                                    Nam
                                                                </label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <Field
                                                                    className="form-check-input"
                                                                    id="inlineRadio2"
                                                                    name="gender"
                                                                    type="radio"
                                                                    value="1"
                                                                />
                                                                <label className="form-check-label"
                                                                       htmlFor="inlineRadio2">
                                                                    Nữ
                                                                </label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <Field
                                                                    className="form-check-input"
                                                                    id="inlineRadio3"
                                                                    name="gender"
                                                                    type="radio"
                                                                    value="2"
                                                                />
                                                                <label className="form-check-label"
                                                                       htmlFor="inlineRadio3">
                                                                    Khác
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="form-outline mb-4">
                                                            <label className="form-label" htmlFor="form3Example4cdg">
                                                                Số CMND
                                                            </label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                className="form-control form-control-lg"
                                                                id="form3Example4cdg"
                                                                type="number"
                                                                name="iDCard"
                                                            />
                                                        </div>
                                                        <ErrorMessage name='iDCard' component='span'
                                                                      className='form-err'/>
                                                        <div className="form-outline mb-4">
                                                            <label className="form-label" htmlFor="form5Examplecdg">
                                                                Số điện thoại
                                                            </label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                className="form-control form-control-lg"
                                                                id="form5Examplecdg"
                                                                type="text"
                                                                name="phoneNumber"
                                                            />
                                                        </div>
                                                        <ErrorMessage name='phoneNumber' component='span'
                                                                      className='form-err'/>
                                                        <div className="form-outline mb-4">
                                                            <label className="form-label" htmlFor="form7Example4cdg">
                                                                Email
                                                            </label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                className="form-control form-control-lg"
                                                                id="form7Example4cdg"
                                                                type="text"
                                                                name="email"
                                                            />
                                                        </div>
                                                        <ErrorMessage name='email' component='span'
                                                                      className='form-err'/>
                                                        <div className="form-outline mb-4">
                                                            <label className="form-label" htmlFor="form8Example4cdg">
                                                                Địa chỉ
                                                            </label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                className="form-control form-control-lg"
                                                                id="form8Example4cdg"
                                                                type="text"
                                                                name="address"
                                                            />
                                                        </div>
                                                        <label className="form-label">Loại khách</label>
                                                        <span className="text-danger">*</span>
                                                        <Field
                                                            as="select"
                                                            aria-label="Default select example"
                                                            className="form-select"
                                                            name="typeCustomer"
                                                            style={{height: 50, marginBottom: 30}}
                                                        >
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Field>
                                                        {isSubmitting ?
                                                            <Vortex
                                                                visible={true}
                                                                height="80"
                                                                width="80"
                                                                ariaLabel="vortex-loading"
                                                                wrapperStyle={{}}
                                                                wrapperClass="vortex-wrapper"
                                                                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                                                            />
                                                            :
                                                            <div className="d-flex justify-content-center">
                                                                <button
                                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                                    type="submit"
                                                                >
                                                                    Cập nhật
                                                                </button>
                                                            </div>
                                                        }
                                                        <ToastContainer/>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }
            </Formik>
        </>
    );
}