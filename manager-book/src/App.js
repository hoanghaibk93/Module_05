import logo from './logo.svg';
import './App.css';
import {List} from "./components/book/list";
import React from "react";
import {CreateBook} from "./components/book/createBook";
import {Routes, Route, NavLink} from "react-router-dom";
import {EditBook} from "./components/book/edit";
function App() {
  return (
    <>
        {/*<NavLink to='/'>List</NavLink>*/}
        {/*<NavLink to='/create'>Create</NavLink>*/}
   <Routes>
       <Route path='/' element={<List/>}/>
       <Route path='/create' element={<CreateBook/>}/>
       <Route path='/update/:id' element={<EditBook/>}/>
   </Routes>
    </>
  );
}

export default App;
