import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, Routes} from "react-router";
import {List} from "./components/list";
import {Create} from "./components/create";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <>
     <Routes>
       <Route path='/' element={<List/>}/>
       <Route path='/create' element={<Create/>}/>
     </Routes>
        <ToastContainer/>
    </>
  );
}

export default App;
