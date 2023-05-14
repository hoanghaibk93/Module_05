import React, {useEffect, useState} from "react";
import './serviceUpdate.css';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {Vortex} from "react-loader-spinner";
import * as facilityService from '../../service/facilityService';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router";

export function FacilityUpdate() {
    const navigate = useNavigate();
    const [facility, setFacility] = useState();
    const [typeFacilityList, setTypeFacilityList] = useState([]);
    const [freeServiceList, setFreeServiceList] = useState([]);
    const [typeRentalList, setTypeRentalList] = useState([]);
    const param = useParams();
    const [typeFacilityDetail, setTypeFacilityDetail] = useState(param.typeFacility);


    useEffect(() => {
        const data = async () => {
            const result = await facilityService.findFacilityById(param.id);
            setFacility(result);
        };
        data();
    }, [param.id]);
    useEffect(() => {
        const fetchApi = async () => {
            let resultTypeFacility = await facilityService.findAllTypeFacility();
            let resultTypeRentals = await facilityService.findAllTypeRental();
            let resultFreeServices = await facilityService.findAllFreeService();
            setTypeFacilityList(resultTypeFacility);
            setTypeRentalList(resultTypeRentals);
            setFreeServiceList(resultFreeServices);
        };
        fetchApi();
    }, []);
    if (!facility) {
        return null;
    }

    return (
        <>
            <Formik
                initialValues={{
                    id: facility?.id,
                    nameFacility: facility?.nameFacility,
                    img: facility?.img,
                    typeFacility: facility?.typeFacility,
                    usableArea: facility?.usableArea,
                    price: facility?.price,
                    maxRenter: facility?.maxRenter,
                    typeRental: facility?.typeRental,
                    roomStandard: facility?.roomStandard,
                    description: facility?.description,
                    poolArea: facility?.poolArea,
                    floor: facility?.floor,
                    freeService: facility?.freeService
                }}
                validationSchema={Yup.object({
                    nameFacility: Yup.string()
                        .required('Tên không được để trống, vui lòng nhập tên')
                        .matches(/\D+/, 'Tên phải đúng theo định dạng không có số'),
                    img: Yup.string()
                        .required('Ảnh không được để trống'),
                    usableArea: Yup.number()
                        .positive('Diện tích sử dụng phải là số dương'),
                    price: Yup.number()
                        .positive('Giá phải là số dương'),
                    maxRenter: Yup.number().integer()
                        .positive('Người thuê tối đa phải là số nguyên dương'),
                    // roomStandard: Yup.string()
                    //     .required('Tiêu chuẩn phòng không được để trống'),
                    // description: Yup.string()
                    //     .required('Mô tả tiện nghi khác không được để trống'),
                    // poolArea: Yup.number()
                    //     .positive('Diện tích hồ bơi phải là số dương'),
                    // floor: Yup.number().integer()
                    //     .positive('Số tầng phải là số nguyên dương'),
                    // freeService: Yup.string()
                    //     .required('Dịch vụ miễn phí đi kèm không được để trống')

                })}
                onSubmit={(values, {setSubmitting}) => {
                    console.log(values);
                    const updateFacility = async () => {
                        await facilityService.update({
                            ...values,
                            typeRental: parseInt(values.typeRental),
                            typeFacility: parseInt(typeFacilityDetail),
                            freeService: values.freeService.map(freeService => parseInt(freeService))

                        });
                        console.log(values);
                        setSubmitting(false);
                        toast.success(`Cập nhật ${values.nameFacility} thành công `, {
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
                    updateFacility();
                    navigate('/');
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
                                                        Cập nhật dịch vụ
                                                    </h2>
                                                    <Form>
                                                        <div className="form-outline mb-4">
                                                            <label className="form-label" htmlFor="form3Example0cg">
                                                                Mã số
                                                            </label>
                                                            <Field
                                                                className="form-control form-control-lg"
                                                                id="form3Example0cg"
                                                                type="number"
                                                                name="id"
                                                            />
                                                        </div>
                                                        <div className="form-outline mb-4">
                                                            <label className="form-label" htmlFor="form3Example1cg">
                                                                Tên
                                                            </label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                className="form-control form-control-lg"
                                                                id="form3Example1cg"
                                                                type="text"
                                                                name="nameFacility"
                                                            />
                                                        </div>
                                                        <ErrorMessage name='nameFacility' component='span'
                                                                      className='form-err'/>
                                                        <div className="form-outline mb-4">
                                                            <label className="form-label" htmlFor="form3Example3cg">
                                                                Ảnh
                                                            </label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                className="form-control form-control-lg"
                                                                id="form3Example3cg"
                                                                type="text"
                                                                name="img"
                                                            />
                                                        </div>
                                                        <ErrorMessage name='img' component='span'
                                                                      className='form-err'/>
                                                        <div className="form-outline mb-4">
                                                            <label className="form-label" htmlFor="form3Example4cdg">
                                                                Diện tích sử dụng
                                                            </label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                className="form-control form-control-lg"
                                                                id="form3Example4cdg"
                                                                type="number"
                                                                name="usableArea"
                                                            />
                                                        </div>
                                                        <div className="form-outline mb-4">
                                                            <label className="form-label" htmlFor="form3Example41cdg">
                                                                Giá
                                                            </label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                className="form-control form-control-lg"
                                                                id="form3Example41cdg"
                                                                type="number"
                                                                name="price"
                                                            />
                                                        </div>
                                                        <ErrorMessage name='price' component='span'
                                                                      className='form-err'/>
                                                        <div className="form-outline mb-4">
                                                            <label className="form-label" htmlFor="form5Examplecdg">
                                                                Số người thuê tối đa
                                                            </label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                className="form-control form-control-lg"
                                                                id="form5Examplecdg"
                                                                type="number"
                                                                name="maxRenter"
                                                            />
                                                        </div>
                                                        <ErrorMessage name='maxRenter' component='span'
                                                                      className='form-err'/>
                                                        <div>
                                                            <label className="form-label">Kiểu thuê</label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                as="select"
                                                                aria-label="Default select example"
                                                                className="form-select"
                                                                name="typeRental"
                                                                style={{height: 50, marginBottom: 30}}
                                                            >
                                                                {typeRentalList.map((typeRental, index) => (
                                                                    <option key={index}
                                                                            value={typeRental.id}>{typeRental.name}</option>
                                                                ))}

                                                            </Field>
                                                        </div>
                                                        <div hidden>
                                                            <label className="form-label">Loại dịch vụ</label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                as="select"
                                                                aria-label="Default select example"
                                                                className="form-select"
                                                                name="typeFacility"
                                                                style={{height: 50, marginBottom: 30}}
                                                                onChange={(e) => {
                                                                    setTypeFacilityDetail(e.target.value);
                                                                }}
                                                                value={typeFacilityDetail}
                                                            >
                                                                {typeFacilityList.map((type, index) => (
                                                                    <option key={index}
                                                                            value={type.id}>{type.name}
                                                                    </option>
                                                                ))}

                                                            </Field>
                                                        </div>

                                                        {typeFacilityDetail === "1" && (
                                                            <div>
                                                                <div className="form-outline mb-4">
                                                                    <label className="form-label"
                                                                           htmlFor="form5Examplecdg">
                                                                        Tiêu chuẩn phòng
                                                                    </label>
                                                                    <span className="text-danger">*</span>
                                                                    <Field
                                                                        className="form-control form-control-lg"
                                                                        id="form5Examplecdg"
                                                                        type="text"
                                                                        name="roomStandard"
                                                                    />
                                                                </div>
                                                                <ErrorMessage name='roomStandard' component='span'
                                                                              className='form-err'/>
                                                                <div className="form-outline mb-4">
                                                                    <label className="form-label"
                                                                           htmlFor="form5Examplecdg">
                                                                        Mô tả tiện nghi khác
                                                                    </label>
                                                                    <span className="text-danger">*</span>
                                                                    <Field
                                                                        as="textarea"
                                                                        className="form-control form-control-lg"
                                                                        id="form5Examplecdg"
                                                                        type="text"
                                                                        name="description"
                                                                    />
                                                                </div>
                                                                <ErrorMessage name='description' component='span'
                                                                              className='form-err'/>
                                                                <div className="form-outline mb-4">
                                                                    <label className="form-label"
                                                                           htmlFor="form5Examplecdg">
                                                                        Diện tích hồ bơi
                                                                    </label>
                                                                    <span className="text-danger">*</span>
                                                                    <Field
                                                                        className="form-control form-control-lg"
                                                                        id="form5Examplecdg"
                                                                        type="number"
                                                                        name="poolArea"
                                                                    />
                                                                </div>
                                                                <ErrorMessage name='poolArea' component='span'
                                                                              className='form-err'/>
                                                                <div className="form-outline mb-4">
                                                                    <label className="form-label"
                                                                           htmlFor="form5Examplecdg">
                                                                        Số tầng
                                                                    </label>
                                                                    <span className="text-danger">*</span>
                                                                    <Field
                                                                        className="form-control form-control-lg"
                                                                        id="form5Examplecdg"
                                                                        type="number"
                                                                        name="floor"
                                                                    />
                                                                    <ErrorMessage name='floor' component='span'
                                                                                  className='form-err'/>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {typeFacilityDetail === "2" && (
                                                            <div>
                                                                <div className="form-outline mb-4">
                                                                    <label className="form-label"
                                                                           htmlFor="form5Examplecdg">
                                                                        Tiêu chuẩn phòng
                                                                    </label>
                                                                    <span className="text-danger">*</span>
                                                                    <Field
                                                                        className="form-control form-control-lg"
                                                                        id="form5Examplecdg"
                                                                        type="text"
                                                                        name="roomStandard"
                                                                    />
                                                                </div>
                                                                <ErrorMessage name='roomStandard' component='span'
                                                                              className='form-err'/>
                                                                <div className="form-outline mb-4">
                                                                    <label className="form-label"
                                                                           htmlFor="form5Examplecdg">
                                                                        Mô tả tiện nghi khác
                                                                    </label>
                                                                    <span className="text-danger">*</span>
                                                                    <Field
                                                                        className="form-control form-control-lg"
                                                                        id="form5Examplecdg"
                                                                        type="text"
                                                                        name="description"
                                                                    />
                                                                </div>
                                                                <ErrorMessage name='description' component='span'
                                                                              className='form-err'/>

                                                                <div className="form-outline mb-4">
                                                                    <label className="form-label"
                                                                           htmlFor="form5Examplecdg">
                                                                        Số tầng
                                                                    </label>
                                                                    <span className="text-danger">*</span>
                                                                    <Field
                                                                        className="form-control form-control-lg"
                                                                        id="form5Examplecdg"
                                                                        type="number"
                                                                        name="floor"
                                                                    />
                                                                    <ErrorMessage name='floor' component='span'
                                                                                  className='form-err'/>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {typeFacilityDetail === "3" && (
                                                            <div>
                                                                <div className="form-outline mb-4">
                                                                    <label className="form-label"
                                                                           htmlFor="form5Examplecdg">
                                                                        Dịch vụ miễn phí đi kèm
                                                                    </label>
                                                                    <span className="text-danger">*</span>
                                                                    {freeServiceList.map((service, index) => (
                                                                        <div key={index} className="form-check">
                                                                            <Field className="form-check-input"
                                                                                   value={service.id.toString()}
                                                                                   name="freeService" type="checkbox"
                                                                                   id={service.id}
                                                                            />
                                                                            <label className="form-check-label"
                                                                                   htmlFor={service.id}>
                                                                                {service.name}
                                                                            </label>
                                                                        </div>
                                                                    ))}

                                                                </div>
                                                                <ErrorMessage name='freeService' component='span'
                                                                              className='form-err'/>
                                                            </div>

                                                        )}
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
