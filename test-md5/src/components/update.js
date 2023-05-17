import React, {useEffect, useState} from "react";
import * as serviceProduct from "../service/serviceProduct";
import {useNavigate, useParams} from "react-router";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function Update() {
    const [listProduct, setListProduct] = useState([]);
    const [listType, setListType] = useState([]);
    const [productDetail, setProductDetail] = useState();
    const param = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchApi = async () => {
            let resultProduct = await serviceProduct.findAllProduct();
            let resultType = await serviceProduct.findAllType();
            setListProduct(resultProduct);
            setListType(resultType);
        };
        fetchApi();
    });
    useEffect(() => {
        const fetchApiUpdate = async () => {
            let result = await serviceProduct.findById(param.id);
            setProductDetail(result);
        };
        fetchApiUpdate();
    }, [param.id]);


    if (!productDetail) {
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    id: productDetail?.id,
                    name: productDetail?.name,
                    date: productDetail?.date,
                    quality: productDetail?.quality,
                    productType: productDetail.productType?.idType
                }}
                validationSchema={Yup.object({
                    name: Yup.string().matches(/\w{1,100}/),
                    date: Yup.string().required("Không được để trống"),
                    quality: Yup.number().integer().positive("Giá phải là số nguyên lớn hơn không")
                })}
                onSubmit={(values) => {
                    const updateProduct = async () => {
                        values = {
                            ...values, quality: parseInt(values.quality),
                            productType: { idType: parseInt(values.productType)}
                        }
                        await serviceProduct.update(values);
                        // await serviceProduct.update({
                        //     ...values, quality: parseInt(values.quality)
                        // });

                        console.log(values);
                        navigate('/');
                        toast.success(`Cập nhật thành công `, {
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
                    updateProduct();
                }}>
                <div>
                    <h2 className="text-uppercase text-center mt-4">
                        Update Product
                    </h2>
                    <Form className="m-4 w-50 m-auto bg-light text-dark border border-primary">
                        {/*<div className="form-outline">*/}
                        {/*    <label className="form-label" htmlFor="2">id</label>*/}
                        {/*    <Field className="form-control form-control-lg" id="2" name="id" type="text"/>*/}
                        {/*</div>*/}
                        <div className="form-outline">
                            <label className="form-label" htmlFor="2">Name</label>
                            <Field className="form-control form-control-lg" id="2" name="name" type="text"/>
                        </div>
                        {/*<ErrorMessage name="name" component="span" className="text-danger"/>*/}
                        <div className="form-outline">
                            <label className="form-label" htmlFor="2">Date</label>
                            <Field className="form-control form-control-lg" id="2" name="date" type="text"/>
                        </div>
                        {/*<ErrorMessage name="date" component="span" className="text-danger"/>*/}
                        <div className="form-outline">
                            <label className="form-label" htmlFor="2">Quality</label>
                            <Field className="form-control form-control-lg" id="2" name="quality" type="text"/>
                        </div>
                        {/*<ErrorMessage name="quality" component="span" className="text-danger"/>*/}
                        <div>
                            <label className="form-label">Type</label>
                            <Field aria-label="Default select example" as="select" className="form-select"
                                   name="productType">
                                {listType.map((type, index) => (
                                    <option value={type.idType}>{type.nameProduct}</option>
                                ))}
                            </Field>
                        </div>

                        <button className="btn btn-warning mt-3 mb-3" type="submit">Update</button>
                    </Form>
                </div>


            </Formik>
        </>
    );

}