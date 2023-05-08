import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {toast, ToastContainer} from "react-toastify";
import {Vortex} from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";

export function ContractCreate() {
    const today = new Date();
    const dateNow = today.toISOString().substr(0,10);
    return (
        <>
            <Formik
                initialValues={{
                    idContract: '',
                    customerId: '1',
                    facilityId: '1',
                    checkInDate: dateNow,
                    checkOutDate: '',
                    deposit: ''
                }}
                // initialErrors={{
                //     checkInDate: 'Ngày đặt phòng không được để trống',
                //     checkOutDate: 'Ngày trả phòng không được để trống'
                // }}
                validationSchema={Yup.object({
                    idContract: Yup.string()
                        .required('Mã hợp đồng không được để trống'),
                    checkInDate: Yup.date()
                        .required('Ngày đặt phòng không được để trống'),
                    checkOutDate: Yup.date()
                        .required('Ngày trả phòng không được để trống')
                        .when('checkInDate',(checkInDate, schema)=>{
                            return schema.min(checkInDate,'Ngày trả phòng phải bằng hoặc sau ngày đặt phòng')
                        }),
                    deposit: Yup.number()
                        .required('Tiền đặt cọc không được để trống')
                        .positive('Tiền đặt cọc phải là số dương'),
                })}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        console.log(values);
                        setSubmitting(false);
                        toast.success(`Tạo mã hợp đồng: ${values.idContract} thành công `, {
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
                                                        Thêm mới Hợp đồng
                                                    </h2>
                                                    <Form>
                                                        <div className="form-outline mb-4">
                                                            <label className="form-label" htmlFor="form3Example1cg">
                                                                Mã hợp đồng
                                                            </label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                className="form-control form-control-lg"
                                                                id="form3Example1cg"
                                                                type="text"
                                                                name="idContract"
                                                            />
                                                        </div>
                                                        <ErrorMessage name='idContract' component='span'
                                                                      className='form-err'/>
                                                        <div>
                                                            <label className="form-label">Mã khách hàng</label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                as="select"
                                                                aria-label="Default select example"
                                                                className="form-select"
                                                                name="customerId"
                                                                style={{height: 50, marginBottom: 30}}
                                                            >
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                            </Field>
                                                        </div>
                                                        <div>
                                                            <label className="form-label">Mã dịch vụ</label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                as="select"
                                                                aria-label="Default select example"
                                                                className="form-select"
                                                                name="facilityId"
                                                                style={{height: 50, marginBottom: 30}}
                                                            >
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                            </Field>
                                                        </div>
                                                        <div className="form-outline mb-4">
                                                            <label className="form-label" htmlFor="form3Example3cg">
                                                                Ngày đặt phòng
                                                            </label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                className="form-control form-control-lg"
                                                                id="form3Example3cg"
                                                                type="date"
                                                                name="checkInDate"
                                                            />
                                                        </div>
                                                        <ErrorMessage name='checkInDate' component='span'
                                                                      className='form-err'/>

                                                        <div className="form-outline mb-4">
                                                            <label className="form-label" htmlFor="form3Example3cg">
                                                                Ngày trả phòng phòng
                                                            </label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                className="form-control form-control-lg"
                                                                id="form3Example3cg"
                                                                type="date"
                                                                name="checkOutDate"
                                                            />
                                                        </div>
                                                        <ErrorMessage name='checkOutDate' component='span'
                                                                      className='form-err'/>
                                                        <div className="form-outline mb-4">
                                                            <label className="form-label"
                                                                   htmlFor="form3Example4cdg">
                                                                Tiền đặt cọc
                                                            </label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                className="form-control form-control-lg"
                                                                id="form3Example4cdg"
                                                                type="number"
                                                                name="deposit"
                                                            />
                                                        </div>
                                                        <ErrorMessage name='deposit' component='span'
                                                                      className='form-err'/>

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
                                                                    Thêm mới
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