import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {toast, ToastContainer} from "react-toastify";
import {Vortex} from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";

export function ContactForm() {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Tên không được để trống"),
                    email: Yup.string()
                        .required("Email không được để trống")
                        .matches(/^[a-zA-Z0-9+-]+@[a-zA-Z0-9-]+$/, "Nhập đúng theo định dạng"),
                    phone: Yup.number()
                        .required("Số điện thoại không được để trống")
                        .integer("Số điện thoại phải là số nguyên")
                })
                }
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        console.log(values)
                        setSubmitting(false);
                        toast.success(`Contact ${values.name} finally`,{position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",});
                    }, 1000);
                }}
            >
                {
                    ({isSubmitting}) => (
                        <div className="form-contact">
                        <h1>Contact form</h1>
                            <Form>

                                    <div className="form-group">
                                        <label htmlFor="">Name</label>
                                        <Field type="text" className="form-control" name="name" id=""
                                               aria-describedby="helpId"
                                               placeholder=""/>
                                    </div>
                                    <ErrorMessage name='name' component='span' className='form-err'/>
                                    <div className="form-group">
                                        <label htmlFor="">Email</label>
                                        <Field type="text" className="form-control" name="email" id=""
                                               aria-describedby="helpId"
                                               placeholder=""/>
                                    </div>
                                    <ErrorMessage name='email' component='span' className='form-err'/>
                                    <div className="form-group">
                                        <label htmlFor="">Phone</label>
                                        <Field type="text" className="form-control" name="phone" id=""
                                               aria-describedby="helpId"
                                               placeholder=""/>
                                    </div>
                                    <ErrorMessage name='phone' component='span' className='form-err'/>
                                    <div className="form-group">
                                        <label htmlFor="">Message</label>
                                        <Field type="text" className="form-control" name="message" id=""
                                               aria-describedby="helpId"
                                               placeholder=""/>
                                    </div>
                                    <ErrorMessage name='message' component='span' className='form-err'/>
                                    {
                                        isSubmitting ?
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

                                            <button type="submit" className="btn btn-primary">Submit</button>

                                    }
                                    <ToastContainer/>

                            </Form>
                        </div>
                    )
                }

            </Formik>

        </>

    );
}