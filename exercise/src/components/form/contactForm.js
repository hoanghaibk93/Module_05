import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {toast, ToastContainer} from "react-toastify";
import {Audio} from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';

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
                        .matches(/^[a-zA-Z0-9]+[+-]@[a-zA-Z0-9]+$/, "Nhập đúng theo định dạng"),
                    phone: Yup.number()
                        .required("Số điện thoại không được để trống")
                        .integer("Số điện thoại phải là số nguyên")
                })
                }
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        toast(`Contact ${values.name} ok`);
                    }, 1000);
                }}
            >
                {
                    ({isSubmitting}) => (
                        <h1>Contact form</h1>,
                            <Form>
                                <div className="form-contact">
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
                                            <Audio
                                                height="80"
                                                width="80"
                                                radius="9"
                                                color="green"
                                                ariaLabel="loading"
                                                wrapperStyle
                                                wrapperClass
                                            />
                                            :

                                            <button type="submit" className="btn btn-primary">Submit</button>

                                    }
                                    <ToastContainer/>
                                </div>
                            </Form>
                    )
                }

            </Formik>

        </>

    );
}