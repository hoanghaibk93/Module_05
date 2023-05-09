import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {toast, ToastContainer} from "react-toastify";
import {Vortex} from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import React, {useEffect, useState} from "react";
import * as booksService from "../../services/booksService";
import {NavLink} from "react-router-dom";
import {useParams} from "react-router-dom";
export function EditBook() {
  const [book, setBook] = useState();
  const param = useParams();
  useEffect(()=>{
      const fetchApi = async ()=>{
          const result = await booksService.findBookById(param.id);
          setBook(result);
      }
      fetchApi();
  },[])
    if(!book){return null};
    return (
        <>
             <Formik
                initialValues={
                    {
                        id: book?.id,
                        title: book?.title,
                        quantity: book?.quantity
                    }
                }
                validationSchema={Yup.object({
                    title: Yup.string().required(),
                    quantity: Yup.string().required()
                })

                }
                onSubmit={(values, {setSubmitting}) => {
                    const updateBook = async () => {
                        await booksService.update(values);
                        console.log(values)
                        setSubmitting(false);
                        toast.success(`Cập nhật hợp đồng: ${values.idContract} thành công `, {
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
                    updateBook();
                }}
            >
                {
                    ({isSubmitting}) => (
                        <div>
                            <NavLink to='/'>List</NavLink>
                            <h1>Update book</h1>
                            <Form>
                                <div hidden className="form-group">
                                    <label htmlFor="">id</label>
                                    <Field type="text" className="form-control" name="id" id=""
                                           aria-describedby="helpId"
                                           placeholder=""/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Title</label>
                                    <Field type="text" className="form-control" name="title" id=""
                                           aria-describedby="helpId"
                                           placeholder=""/>
                                </div>
                                <ErrorMessage name='title' component='span'
                                              className='form-err'/>
                                <div className="form-group">
                                    <label htmlFor="">Quantity</label>
                                    <Field type="text" className="form-control" name="quantity" id=""
                                           aria-describedby="helpId"
                                           placeholder=""/>
                                </div>
                                <ErrorMessage name='quantity' component='span'
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
                                            Cập nhật
                                        </button>
                                    </div>
                                }
                                <ToastContainer/>
                            </Form>
                        </div>
                    )}
            </Formik>
        </>
    );
}