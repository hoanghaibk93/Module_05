import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import * as studentService from "../service/studentService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function Update() {
    const [studentList, setStudentList] = useState([]);
    const [typeList, setTypeList] = useState([]);
    const [student, setStudent] = useState();
    const navigate = useNavigate();
    const param = useParams();

    useEffect(() => {
        const fetchApi = async () => {
            let students = await studentService.findAllStudent();
            let types = await studentService.findAllType();
            setStudentList(students);
            setTypeList(types);
        };
        fetchApi();
    }, []);
    useEffect(() => {
        const data = async () => {
            const result = await studentService.findById(param.id);
            setStudent(result);
        };
        data();
    }, [param.id]);
    if (!student) {
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    id: student?.id,
                    name: student?.name,
                    age: student?.age,
                    date: student?.date,
                    address: student?.address,
                    idType: student?.idType,
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Không được để trống').matches(/\d{5,10}/, 'Không đúng định dạng'),
                    age: Yup.number().integer('Tuổi phải có số nguyên').positive('Tuổi không được số âm'),
                    date: Yup.string().required('Ngày sinh không được để trống'),
                    address: Yup.string().required('Địa chỉ không được để trống')
                })}
                onSubmit={(values) => {
                    const updateStudent = async () => {
                        console.log(values);
                        await studentService.update({
                            ...values, idType: parseInt(values.idType)
                        });
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
                    updateStudent();
                }}
            >
                <div>
                    <h2 className="text-uppercase text-center mt-4">
                        Cập nhật học sinh
                    </h2>
                    <Form className="m-4 w-50 m-auto bg-light text-dark border border-primary">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="1">Tên</label>
                            <Field className="form-control form-control-lg" id="1" name="name" type="text"/>
                        </div>
                        <ErrorMessage name="name" component="span" className="text-danger"/>
                        <div className="form-outline">
                            <label className="form-label" htmlFor="2">Tuổi</label>
                            <Field className="form-control form-control-lg" id="2" name="age" type="number"/>
                        </div>
                        <ErrorMessage name="age" component="span" className="text-danger"/>
                        <div className="form-outline">
                            <label className="form-label" htmlFor="3">Ngày sinh</label>
                            <Field className="form-control form-control-lg" id="3" name="date" type="date"/>
                        </div>
                        <ErrorMessage name="date" component="span" className="text-danger"/>
                        <div className="form-outline">
                            <label className="form-label" htmlFor="4">Địa chỉ</label>
                            <Field className="form-control form-control-lg" id="4" name="address" type="text"/>
                        </div>
                        <ErrorMessage name="address" component="span" className="text-danger"/>
                        <div>
                            <label className="form-label">Loại học sinh</label>
                            <Field as="select" aria-label="Default select example" className="form-select"
                                   name="idType">
                                {typeList.map((type, index) => (
                                    <option key={index} value={type.id}>{type.name}</option>
                                ))}
                            </Field>
                        </div>
                        <button className="btn btn-warning mt-3 mb-3" type="submit">Cập nhật</button>
                    </Form>
                </div>

            </Formik>
        </>
    );
}