import './App.css';
import {Route, Routes} from "react-router-dom";
import React from "react";
import {List} from "./components/list";
import {Update} from "./components/update";
import {ToastContainer} from "react-toastify";
import {Create} from "./components/create";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<List/>}/>
                <Route path='/update/:id' element={<Update/>}/>
                <Route path='/create' element={<Create/>}/>
            </Routes>
         <ToastContainer/>
        </>
    );
}

export default App;
