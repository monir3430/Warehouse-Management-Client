import React, { useEffect, useState } from 'react';
import './App.css'

import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './components/AddItems/AddItems';
import Signin from './components/Authentication/Signin';
import Signup from './components/Authentication/Signup';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Headers from './components/Header/Headers';

import Home from "./components/Home/Home"
import Inventory from './components/Inventory/Inventory';
import ManageItems from './components/Manage-Items/ManageItems';
import MyItems from './components/MyItems/MyItems';
import NotFound from './components/NotFound/NotFound';


function App() {



  return (
    <div className='main-body'>
      
      <Headers></Headers>
      <Routes>
        <Route path = "/" element = {<Home></Home>}></Route>
        <Route path = "/Home" element = {<Home></Home>}></Route>
        <Route path = "/Inventory" element = {<Inventory></Inventory>}></Route>
        <Route path = "/ManageItems" element = {<ManageItems></ManageItems>}></Route>
        <Route path = "/MyItems" element = {<MyItems></MyItems>}></Route>
        <Route path = "/AddItems" element = {<AddItems></AddItems>}></Route>
        <Route path = "/Signin" element = {<Signin></Signin>}></Route>
        <Route path = "/Signup" element = {<Signup></Signup>}></Route>
        <Route path = "/Blogs" element = {<Blogs></Blogs>}></Route>
        <Route path = "/*" element = {<NotFound></NotFound>}></Route>

        
      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
