import React from 'react';

import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './components/AddItems/AddItems';
import Signin from './components/Authentication/Signin';
import Signup from './components/Authentication/Signup';
import Blogs from './components/Blogs/Blogs';
import Headers from './components/Header/Headers';

import Home from "./components/Home/Home"
import Inventory from './components/Inventory/Inventory';
import ManageItems from './components/Manage-Items/ManageItems';
import MyItems from './components/MyItems/MyItems';


function App() {

  return (
    <div>
      <Headers></Headers>
      <Routes>
        <Route path = "/" element = {<Home></Home>}></Route>
        <Route path = "/Inventory" element = {<Inventory></Inventory>}></Route>
        <Route path = "/ManageItems" element = {<ManageItems></ManageItems>}></Route>
        <Route path = "/MyItems" element = {<MyItems></MyItems>}></Route>
        <Route path = "/AddItems" element = {<AddItems></AddItems>}></Route>
        <Route path = "/Signin" element = {<Signin></Signin>}></Route>
        <Route path = "/Signup" element = {<Signup></Signup>}></Route>
        <Route path = "/Blogs" element = {<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
