import dataFurama from '../../data/dataFurama.json'
export function ContractList() {
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
                        style={{ backgroundColor: "rgba(0,0,0,.25)" }}
                    >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="form2 bg-dark shadow-2-strong">
                                        <div className="form2-body">
                                            <h1 className="text-light text-center" style={{ zIndex: 2 }}>
                                                DANH SÁCH HỢP ĐỒNG
                                            </h1>
                                            <div className="table-responsive">
                                                <table className="table table-dark table-borderless mb-0">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">Mã HỢP ĐỒNG</th>
                                                        <th scope="col">KHÁCH HÀNG</th>
                                                        <th scope="col">DỊCH VỤ</th>
                                                        <th scope="col">NGÀY LÀM HỢP ĐỒNG</th>
                                                        <th scope="col">NGÀY KẾT THÚC HỢP ĐỒNG</th>
                                                        <th scope="col">TIỀN ĐẶT CỌC</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {dataFurama.contracts.map((contract, index)=>(
                                                    <tr key={index}>
                                                        <th scope="row">{contract.idContract}</th>
                                                        <td>{contract.customerId}</td>
                                                        <td>{contract.facilityId}</td>
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