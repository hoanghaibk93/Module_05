import React, {useEffect, useState} from "react";
import * as productService from '../service/productService';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router";

export function Create() {
    const navigate = useNavigate();
    const [productTypeList, setProductTypeList] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            let result = await productService.findAllProductType();
            setProductTypeList(result);
        };
        fetchApi();
    });

    return (
        <>
            <Formik
                initialValues={{
                    nameProduct: '',
                    price: '',
                    status: '',
                    idProductType: 1
                }}
                validationSchema={Yup.object({
                        nameProduct: Yup.string().required('Không được để trống'),
                        price: Yup.number().required('Không được để trống')
                            .positive('Không được âm hoặc bằng không'),
                        status: Yup.string().required('Không được để trống')
                    }
                )}
                onSubmit={(values) => {
                    const createProduct = async () => {
                        await productService.create({...values,
                            idProductType: parseInt(values.idProductType)
                        });
                        navigate('/')
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
                    createProduct();

                }}

            >
                <div>
                    <h2 className="text-uppercase text-center mt-4">
                        Create Product
                    </h2>

                    <Form className="m-4 w-50 m-auto bg-light text-dark border border-primary">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="1">Name Product</label>
                            <Field className="form-control form-control-lg" id="1" name="nameProduct" type="text"/>
                        </div>
                        <ErrorMessage name="nameProduct" component="span" className="text-danger"/>
                        <div className="form-outline">
                            <label className="form-label" htmlFor="2">Price</label>
                            <Field className="form-control form-control-lg" id="2" name="price" type="number"/>
                        </div>
                        <ErrorMessage name="price" component="span" className="text-danger"/>
                        <div>
                            <label className="form-label">Status</label>
                            <div className="form-check form-check form-check-inline">
                                <Field className="form-check-input" id="3" name="status" type="radio" value="Có"/>
                                <label className="form-check-label" htmlFor="3">
                                    Có
                                </label>
                            </div>
                            <div className="form-check form-check form-check-inline">
                                <Field className="form-check-input" id="3" name="status" type="radio" value="Không"/>
                                <label className="form-check-label" htmlFor="3">
                                    Không
                                </label>
                            </div>
                        </div>
                        <ErrorMessage name="status" component="span" className="text-danger"/>

                        <Field as="select" aria-label="Default select example" className="form-select"
                               name="idProductType">
                            {productTypeList.map((product, index) => (
                                <option value={product.id}>{product.nameTypeProduct}</option>
                            ))}
                        </Field>

                        <button className="btn btn-warning mt-3 mb-3" type="submit">Thêm mới</button>
                    </Form>

                </div>
            </Formik>

        </>
    );

}