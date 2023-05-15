import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import {List} from "./components/list";
import {Create} from "./components/create";
import {ToastContainer} from "react-toastify";
import {Update} from "./components/update";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<List/>}/>
                <Route path='/create' element={<Create/>}/>
                <Route path='/update/:id' element={<Update/>}/>
            </Routes>
            <ToastContainer/>
        </>
    );
}

export default App;
