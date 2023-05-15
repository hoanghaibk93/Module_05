import 'react-toastify/dist/ReactToastify.css';
import React, {useEffect, useState} from "react";
import * as bookService from "../service/bookService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {toast} from "react-toastify";
import {useNavigate} from "react-router";

export function Create() {
    const [typeList, setTypeList] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchApi = async () => {
            let typeList = await bookService.findAllType();
            setTypeList(typeList);
        };
        fetchApi();
    }, []);
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    price: '',
                    date: '',
                    idType: 1
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Không được để trống')
                        .matches(/\w{2,10}/),
                    price: Yup.number().required('Không được để trống').required('Không được để trống')
                        .positive('Giá không được âm'),
                    date: Yup.string().required('Không được để trống')
                })}
                onSubmit={(values) => {
                    const createBook = async () => {
                        await bookService.create({
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
                    createBook();
                }}>
                <div>
                    <h2 className="text-uppercase text-center mt-4">
                        Create Book
                    </h2>
                    <Form className="m-4 w-50 m-auto bg-light text-dark border border-primary">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="1">Name</label>
                            <Field className="form-control form-control-lg" id="1" name="name" type="text"/>
                            <ErrorMessage name='name' component='span' className='text-danger'/>
                        </div>
                        <div className="form-outline">
                            <label className="form-label" htmlFor="2">Price</label>
                            <Field className="form-control form-control-lg" id="2" name="price" type="number"/>
                            <ErrorMessage name='price' component='span' className='text-danger'/>
                        </div>
                        <div className="form-outline">
                            <label className="form-label" htmlFor="2">Date</label>
                            <Field className="form-control form-control-lg" id="2" name="date" type="date"/>
                            <ErrorMessage name='date' component='span' className='text-danger'/>
                        </div>
                        <div>
                            <label className="form-label">Book Type</label>
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