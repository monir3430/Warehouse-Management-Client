import React, { useEffect, useState } from 'react';
import './App.css'

import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './components/AddItems/AddItems';
import Signin from './components/Authentication/Signin';
import Signup from './components/Authentication/Signup';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Headers from './components/Header/Headers';
import Home from "./components/Home/Home"
import MyItems from './components/MyItems/MyItems';
import NotFound from './components/NotFound/NotFound';
import ManageItems from './components/Inventory/ManageItems';
import UpdateInfo from './components/UpdateInfo/UpdateInfo';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';
import AllItems from './components/AllItems/AllItems';



function App() {



  return (
    <div className='main-body'>
      
      <Headers></Headers>
      <Routes>
        <Route path = "/" element = {<Home></Home>}></Route>
        <Route path = "/home" element = {<Home></Home>}></Route>
        <Route path = "/manage" element = {<RequiredAuth>
          <ManageItems/>
        </RequiredAuth>}></Route>
        <Route path = "/myItems" element = {<RequiredAuth>
          <MyItems></MyItems>
        </RequiredAuth>}></Route>
        <Route path = "/addItems" element = {<RequiredAuth>
          <AddItems></AddItems>
        </RequiredAuth>}></Route>
        <Route path = "/signin" element = {<Signin></Signin>}></Route>
        <Route path = "/signup" element = {<Signup></Signup>}></Route>
        <Route path = "/blogs" element = {<Blogs></Blogs>}></Route>
        <Route path = "/allitems" element = {<AllItems></AllItems>}></Route>
        <Route path = "/update/:id" element = { <RequiredAuth>
            <UpdateInfo/>
          </RequiredAuth>}>
            
          </Route>
        <Route path = "/*" element = {<NotFound></NotFound>}></Route>

        
      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
