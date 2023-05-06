import './App.css';
import {Header} from "./components/common/header";
import {Footer} from "./components/common/footer";
import React from "react";
import {ServiceUpdate} from "./components/service/serviceUpdate";
import {ServiceCreate} from "./components/service/serviceCreate";
import {CustomerList} from "./components/customer/customerList";
import {CustomerUpdate} from "./components/customer/customerUpdate";
import {CustomerCreate} from "./components/customer/customerCreate";
import {ContractCreate} from "./components/contract/contractCreate";
import {ContractList} from "./components/contract/contractList";
import {FacilityList} from "./components/service/facilityList";


function App() {
    return (
        <>
            <Header/>
            {/*<ServiceList/>*/}
            {/*<ServiceUpdate/>*/}
            {/*<ServiceCreate/>*/}
            {/*<CustomerList/>*/}
            {/*<CustomerUpdate/>*/}
            <CustomerCreate/>
            {/*<ContractCreate/>*/}
            {/*<ContractList/>*/}
            {/*<FacilityList/>*/}
            <Footer/>
        </>
    );
}

export default App;
