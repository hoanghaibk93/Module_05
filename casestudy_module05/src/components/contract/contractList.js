import dataFurama from '../../data/dataFurama.json';
import * as customerService from "../../service/customerService";
import * as facilityService from "../../service/facilityService";
import * as contractService from "../../service/contractService";
import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";

export function ContractList() {
    const [contracts, setContracts] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [facilitys, setFacilitys] = useState([]);
    const [contractDetail, setContractDetail] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            const listCustomer = await customerService.findAll();
            const listContract = await contractService.findAll();
            const listFacility = await facilityService.findAll();

            //sắp xếp theo giá đặt cọc
            const listContractSort = listContract.sort((a, b) => a.deposit - b.deposit);

            setCustomers(listCustomer);
            setContracts(listContractSort);
            setFacilitys(listFacility);
        };
        fetchApi();
    }, []);
    const getData = async (id) => {
        const data = await contractService.getContract(id);
        setContractDetail(data);
    };
    const handleDelete = async () => {
        await contractService.deleteContract(contractDetail.id);
        let result = await contractService.findAll();
        setContracts(result);
        toast.success(`Xóa ${contractDetail.name} thành công `, {
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
    return (
        <>
            <section className="intro">
                <div
                    className="bg-image h-100"
                    style={{
                        backgroundImage:
                            'url("image2/background.jpg")'
                    }}
                >
                    <div
                        className="mask d-flex align-items-center h-100"
                        style={{backgroundColor: "rgba(0,0,0,.25)"}}
                    >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="form2 bg-dark shadow-2-strong">
                                        <div className="form2-body">
                                            <h1 className="text-light text-center" style={{zIndex: 2}}>
                                                DANH SÁCH HỢP ĐỒNG
                                            </h1>
                                            <div className="table-responsive">
                                                <table className="table table-dark table-borderless mb-0">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">Mã SỐ</th>
                                                        <th scope="col">KHÁCH HÀNG</th>
                                                        <th scope="col">DỊCH VỤ</th>
                                                        <th scope="col">NGÀY LÀM HỢP ĐỒNG</th>
                                                        <th scope="col">NGÀY KẾT THÚC HỢP ĐỒNG</th>
                                                        <th scope="col">TIỀN ĐẶT CỌC</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {contracts.map((contract, index) => (
                                                        <tr key={index}>
                                                            <td scope="row" className="text-center">{contract.id}</td>
                                                            <td>{customers.find(customer => contract.customerId === customer.id)?.name}</td>
                                                            <td>{facilitys.find(facility => contract.facilityId === facility.id)?.nameFacility}</td>
                                                            <td>{contract.checkInDate}</td>
                                                            <td>{contract.checkOutDate}</td>
                                                            <td>
                                                                {contract.deposit}
                                                                <span> VND</span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}