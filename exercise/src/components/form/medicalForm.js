import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';

export function MedicalForm() {
    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    idCard: "",
                    date: "",
                    gender: "0",
                    nationality: "",
                    company: "",
                    department: "",
                    healthCard: "",
                    province: "",
                    district: "",
                    ward: "",
                    houseNumber: "",
                    phone: "",
                    email: "",
                    information: "",
                    informationOne: ['Sốt', 'Ho'],
                    informationTwo: []

                }}
                validationSchema={Yup.object({
                        name: Yup.string()
                            .required(),
                        idCard: Yup.string()
                            .required(),
                        date: Yup.number().integer()
                            .required()
                            .min(1900),
                        nationality: Yup.string()
                            .required(),
                        province: Yup.string()
                            .required(),
                        district: Yup.string()
                            .required(),
                        ward: Yup.string()
                            .required(),
                        houseNumber: Yup.string()
                            .required(),
                        phone: Yup.string()
                            .required(),
                        email: Yup.string()
                            .required()
                            .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/),

                    },
                )}

            >
                <div className="form-medical">
                    <h1>TỜ khai y tế</h1>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="">Họ tên</label>
                            <Field type="text" className="form-control" name="name" id="" aria-describedby="helpId"
                                   placeholder=""/>
                        </div>
                        <ErrorMessage name='name' component='span' className='form-err'/>
                        <div className="form-group">
                            <label htmlFor="">Số hộ chiếu/CMND</label>
                            <Field type="text" className="form-control" name="idCard" id="" aria-describedby="helpId"
                                   placeholder=""/>
                        </div>
                        <ErrorMessage name='idCard' component='span' className='form-err'/>
                        <div className="form-group">
                            <label htmlFor="">Năm sinh</label>
                            <Field type="text" className="form-control" name="date" id="" aria-describedby="helpId"
                                   placeholder=""/>
                        </div>
                        <ErrorMessage name='date' component='span' className='form-err'/>
                        <span>Giới tính</span>
                        <div className="form-check form-check-inline">
                            <Field className="form-check-input" type="radio" name="gender" id="inlineRadio1"
                                   value="0"/>
                            <label className="form-check-label" htmlFor="inlineRadio1">Nam</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field className="form-check-input" type="radio" name="gender" id="inlineRadio2"
                                   value="1"/>
                            <label className="form-check-label" htmlFor="inlineRadio2">Nữ</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Quốc tịch</label>
                            <Field type="text" className="form-control" name="nationality" id="" aria-describedby="helpId"
                                   placeholder=""/>
                        </div>
                        <ErrorMessage name='nationality' component='span' className='form-err'/>
                        <div className="form-group">
                            <label htmlFor="">Công ty làm việc</label>
                            <Field type="text" className="form-control" name="company" id="" aria-describedby="helpId"
                                   placeholder=""/>
                        </div>
                        <ErrorMessage name='name' component='span' className='form-err'/>
                        <div className="form-group">
                            <label htmlFor="">Bộ phận làm việc</label>
                            <Field type="text" className="form-control" name="department" id="" aria-describedby="helpId"
                                   placeholder=""/>
                        </div>
                        <ErrorMessage name='department' component='span' className='form-err'/>
                        <div className="form-check form-check-inline">
                            <Field className="form-check-input" name="healthCard" type="checkbox" id="inlineCheckbox1" value="option1"/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Có thể bảo hiểm ý tế</label>
                        </div>
                        <h4>Địa chỉ liên lạc tại Việt Nam</h4>
                        <div className="form-group">
                            <label htmlFor="">Tỉnh thành</label>
                            <Field type="text" className="form-control" name="province" id="" aria-describedby="helpId"
                                   placeholder=""/>
                        </div>
                        <ErrorMessage name='province' component='span' className='form-err'/>
                        <div className="form-group">
                            <label htmlFor="">Quận /huyện</label>
                            <Field type="text" className="form-control" name="district" id="" aria-describedby="helpId"
                                   placeholder=""/>
                        </div>
                        <ErrorMessage name='district' component='span' className='form-err'/>
                        <div className="form-group">
                            <label htmlFor="">Phường/xã</label>
                            <Field type="text" className="form-control" name="ward" id="" aria-describedby="helpId"
                                   placeholder=""/>
                        </div>
                        <ErrorMessage name='ward' component='span' className='form-err'/>
                        <div className="form-group">
                            <label htmlFor="">Số nhà, phố, tổ dân phố/thôn/ đội</label>
                            <Field type="text" className="form-control" name="houseNumber" id="" aria-describedby="helpId"
                                   placeholder=""/>
                        </div>
                        <ErrorMessage name='houseNumber' component='span' className='form-err'/>
                        <div className="form-group">
                            <label htmlFor="">Điện thoại</label>
                            <Field type="text" className="form-control" name="phone" id="" aria-describedby="helpId"
                                   placeholder=""/>
                        </div>
                        <ErrorMessage name='name' component='span' className='form-err'/>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <Field type="text" className="form-control" name="email" id="" aria-describedby="helpId"
                                   placeholder=""/>
                        </div>
                        <ErrorMessage name='email' component='span' className='form-err'/>
                        <h4>Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia vùng lảnh thổ nào ?</h4>
                        <div className="form-group">
                            <Field type="text" className="form-control" name="information" id="" aria-describedby="helpId"
                                   placeholder=""/>
                        </div>

                        <h4>Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu hiệu nào sau đây không?</h4>
                        <div className="form-check">
                            <Field className="form-check-input" name="informationOne" type="checkbox" value="Sốt" id="flexCheckChecked" checked/>
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Sốt
                            </label>
                        </div>
                        <ErrorMessage name='information' component='span' className='form-err'/>
                        <div className="form-check">
                            <Field className="form-check-input" name="informationOne" type="checkbox" value="Ho" id="flexCheckChecked" checked/>
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Ho
                            </label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" name="informationOne" type="checkbox" value="Khó thở" id="flexCheckChecked" checked/>
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Khó thở
                            </label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" name="informationOne" type="checkbox" value="Viêm phổi" id="flexCheckChecked" checked/>
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Viêm phổi
                            </label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" name="informationOne" type="checkbox" value="Đau họng" id="flexCheckChecked" checked/>
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Đau họng
                            </label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" name="informationOne" type="checkbox" value="Mệt mỏi" id="flexCheckChecked" checked/>
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Mệt mỏi
                            </label>
                        </div>
                        <h4>Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với?</h4>
                        <div className="form-check">
                            <Field className="form-check-input" name="informationTwo" type="checkbox" value="" id="flexCheckChecked" checked/>
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Người bệnh hoặc nghi ngờ, mắc bệnh VOVID-19
                            </label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" name="informationTwo" type="checkbox" value="" id="flexCheckChecked" checked/>
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Người từ nước có bệnh COVID-19
                            </label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" nname="informationTwo" type="checkbox" value="" id="flexCheckChecked" checked/>
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Người có biểu hiện(Sốt, ho, khó thở, viêm phổi)
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                </div>
            </Formik>
        </>
    );

}