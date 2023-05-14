import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {toast} from "react-toastify";
import {Vortex} from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import * as customerService from "../../service/customerService";
import * as facilityService from "../../service/facilityService";
import * as contractService from "../../service/contractService";

export function ContractCreate() {
    const navigate = useNavigate();
    const today = new Date();
    const dateNow = today.toISOString().substr(0, 10);
    const [customers, setCustomers] = useState([]);
    const [facilitys, setFacilitys] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            let resultCustomers = await customerService.findAll();
            let resultFacilitys = await facilityService.findAll();
            setCustomers(resultCustomers);
            setFacilitys(resultFacilitys);
        };
        fetchApi();
    }, []);
    return (
        <>
            <Formik
                initialValues={{
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
                    checkInDate: Yup.date()
                        .required('Ngày đặt phòng không được để trống'),
                    checkOutDate: Yup.date()
                        .required('Ngày trả phòng không được để trống')
                        .when('checkInDate', (checkInDate, schema) => {
                            return schema.min(checkInDate, 'Ngày trả phòng phải bằng hoặc sau ngày đặt phòng');
                        }),
                    deposit: Yup.number()
                        .required('Tiền đặt cọc không được để trống')
                        .positive('Tiền đặt cọc phải là số dương'),
                })}
                onSubmit={(values, {setSubmitting}) => {
                    console.log(values);
                    const createContract = async () => {
                        await contractService.create({
                            ...values,
                            customerId: parseInt(values.customerId),
                            facilityId: parseInt(values.facilityId),
                        });
                        console.log(values);
                        setSubmitting(false);
                        toast.success(`Tạo hợp đồng cho khách hàng ${customers.find(customer => values.customerId == customer.id)?.name} thành công `, {
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
                    createContract();
                    navigate('/contract');
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
                                                        <div>
                                                            <label className="form-label">Khách hàng</label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                as="select"
                                                                aria-label="Default select example"
                                                                className="form-select"
                                                                name="customerId"
                                                                style={{height: 50, marginBottom: 30}}
                                                            >
                                                                {customers.map((type, index) => (
                                                                    <option key={index}
                                                                            value={type.id}>{type.name}
                                                                    </option>
                                                                ))}
                                                            </Field>
                                                        </div>
                                                        <div>
                                                            <label className="form-label">Loại dịch vụ</label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                as="select"
                                                                aria-label="Default select example"
                                                                className="form-select"
                                                                name="facilityId"
                                                                style={{height: 50, marginBottom: 30}}
                                                            >
                                                                {facilitys.map((type, index) => (
                                                                    <option key={index}
                                                                            value={type.id}>{type.nameFacility}
                                                                    </option>
                                                                ))}
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
                                                        {/*<ToastContainer/>*/}
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