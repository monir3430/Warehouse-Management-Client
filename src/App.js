import React, { useEffect, useState } from 'react';

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


function App() {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  }, [])


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
      <h1>{users.length}</h1>
      {
        users.map(user=> <li key ={user.id}> ID: {user.id} Name:{user.name} Email: {user.email}</li>)
      }
      <Footer></Footer>
    </div>
  );
}

export default App;
