import './App.css';
import {Header} from "./components/common/header";
import {Footer} from "./components/common/footer";
import React from "react";
import {FacilityUpdate} from "./components/service/facilityUpdate";
import {FacilityCreate} from "./components/service/facilityCreate";
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
            {/*<FacilityUpdate/>*/}
            {/*<FacilityCreate/>*/}
            {/*<CustomerList/>*/}
            {/*<CustomerUpdate/>*/}
            {/*<CustomerCreate/>*/}
            <ContractCreate/>
            {/*<ContractList/>*/}
            {/*<FacilityList/>*/}
            <Footer/>
        </>
    );
}

export default App;
