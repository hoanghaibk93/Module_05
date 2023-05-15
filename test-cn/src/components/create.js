import {ErrorMessage, Field, Form, Formik} from "formik";
import 'react-toastify/dist/ReactToastify.css';
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import * as contractService from "../service/contractSerivce";
import * as Yup from 'yup';
import {toast} from "react-toastify";
import {Link} from "react-router-dom";

export function Create() {
    const [typeList, setTypeList] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            let resultType = await contractService.findAllType();
            setTypeList(resultType);
        };
        fetchApi();
    });
    const navigate = useNavigate();

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    start: '',
                    finish: '',
                    price: '',
                    idType: 1
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("Tên không được để trống")
                        .matches(/\w{4,10}/, 'Không đúng theo định dạng'),
                    start: Yup.string().required("Ngày bắt đầu không được để trống"),
                    finish: Yup.string().required("Ngày kết thúc  không được để trống"),
                    price: Yup.number().positive('Giá phải lớn hơn không')
                })}
                onSubmit={(values) => {
                    const createContract = async () => {
                        await contractService.create({
                            ...values,
                            idType: parseInt(values.idType)
                        });
                        navigate('/');
                        toast.success(`Tạo thành công `, {
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
                }
                }>

                <div>

                    <h2 className="text-uppercase text-center mt-4">
                        Create contract
                    </h2>
                    <Form className="m-4 w-50 m-auto bg-light text-dark border border-primary">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="1">Name</label>
                            <Field className="form-control form-control-lg" id="1" name="name" type="text"/>
                        </div>
                        <ErrorMessage name='name' component='span' className='text-danger'/>
                        <div className="form-outline">
                            <label className="form-label" htmlFor="2">Start</label>
                            <Field className="form-control form-control-lg" id="2" name="start" type="date"/>
                        </div>
                        <ErrorMessage name='start' component='span' className='text-danger'/>
                        <div className="form-outline">
                            <label className="form-label" htmlFor="2">Finish</label>
                            <Field className="form-control form-control-lg" id="2" name="finish" type="date"/>
                        </div>
                        <ErrorMessage name='finish' component='span' className='text-danger'/>
                        <div className="form-outline">
                            <label className="form-label" htmlFor="2">Price</label>
                            <Field className="form-control form-control-lg" id="2" name="price" type="number"/>
                        </div>
                        <ErrorMessage name='price' component='span' className='text-danger'/>

                        <div>
                            <label className="form-label">Name Type</label>
                            <Field aria-label="Default select example" as="select" className="form-select"
                                   name="idType">
                                {typeList.map((type, index) => (
                                    <option key={index} value={type.id}>{type.name}</option>
                                ))}
                            </Field>
                        </div>

                        <button className="btn btn-warning mt-3 mb-3" type="submit">Create</button>
                    </Form>
                </div>


            </Formik>

        </>
    );


}