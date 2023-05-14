import './App.css';
import {Header} from "./components/common/header";
import {Footer} from "./components/common/footer";
import React from "react";
import {FacilityUpdate} from "./components/facility/facilityUpdate";
import {FacilityCreate} from "./components/facility/facilityCreate";
import {CustomerList} from "./components/customer/customerList";
import {CustomerUpdate} from "./components/customer/customerUpdate";
import {CustomerCreate} from "./components/customer/customerCreate";
import {ContractCreate} from "./components/contract/contractCreate";
import {ContractList} from "./components/contract/contractList";
import {FacilityList} from "./components/facility/facilityList";
import {Routes, Route, NavLink} from "react-router-dom";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<FacilityList/>}/>
                <Route path='/createFacility' element={<FacilityCreate/>}/>
                <Route path='/updateFacility/:id/:typeFacility' element={<FacilityUpdate/>}/>
                <Route path='/customer' element={<CustomerList/>}/>
                <Route path='/customerCreate' element={<CustomerCreate/>}/>
                <Route path='/customerUpdate/:id' element={<CustomerUpdate/>}/>
                <Route path='/contract' element={<ContractList/>}/>
                <Route path='/contractCreate' element={<ContractCreate/>}/>
            </Routes>
            <ToastContainer/>
            {/*<Header/>*/}
            {/*<ServiceList/>*/}
            {/*<FacilityUpdate/>*/}
            {/*<FacilityCreate/>*/}
            {/*<CustomerList/>*/}
            {/*<CustomerUpdate/>*/}
            {/*<CustomerCreate/>*/}
            {/*<ContractCreate/>*/}
            {/*<ContractList/>*/}
            {/*<FacilityList/>*/}
            {/*<Footer/>*/}
        </>
    );
}

export default App;
