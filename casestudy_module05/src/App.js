import './App.css';
import {Header} from "./components/common/header";
import {Footer} from "./components/common/footer";
import React from "react";
import {ServiceList} from "./components/service/serviceList";
import {ServiceUpdate} from "./components/service/serviceUpdate";
import {ServiceCreate} from "./components/service/serviceCreate";
import {CustomerList} from "./components/customer/customerList";


function App() {
    return (
        <>
            <Header/>
            {/*<ServiceList/>*/}
            {/*<ServiceUpdate/>*/}
            {/*<ServiceCreate/>*/}
            <CustomerList/>
            <Footer/>
        </>
    );
}

export default App;
