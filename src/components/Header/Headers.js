import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink} from "./HeaderElements";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase.init'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import "./../Header/Header.css"


const Headers = () => {
    const [userInfo, setUserInfo]= useState({})
    const [user] = useAuthState(auth);

    //Sign out---------------------------------------
    const handleSignOut = () => {
        signOut(auth).then(() => {console.log("Out")})
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUserInfo(userInfo || {});
        });
    }, [])
    
    return (
       <div>
       
       <Nav>

        <NavMenu>
        {!user?
        <div className="conditional-format">
            <NavLink to ="/home" >
                Home
            </NavLink>
            
            <NavLink to ="/allitems"  >
            All Books
            </NavLink>
        
            <NavLink to ="/blogs" >
            Blogs
            </NavLink>
        </div>:
        <div className="conditional-format" >
             <NavLink to ="/home" >
                Home
            </NavLink>
            
            <NavLink to ="/allitems"  >
            All Books
            </NavLink>
            <NavLink to ="/addItems" >
            Add Book
            </NavLink>
            <NavLink to ="/myItems" >
            My Books
            </NavLink>
            <NavLink to ="/blogs" >
            Blogs
            </NavLink>
        </div>
        
        
        }
            
        </NavMenu>
        <NavBtn>
        {user?<button onClick={handleSignOut}>SignOut</button>: <div>
        <NavBtnLink to = "/signin">
            Sign In
            </NavBtnLink>
            
            <NavBtnLink to = "/signup">
            Sign Up
            </NavBtnLink>
        </div>
            }

            
           
        </NavBtn>

       </Nav>
      
      
       </div>
    );
};

export default Headers;