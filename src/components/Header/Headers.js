import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink} from "./HeaderElements";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase.init'


const Headers = () => {
    const [user] = useAuthState(auth);
    
    return (
       <div>
       
       <Nav>

        <NavMenu>
        <NavLink to ="/home" >
                Home
            </NavLink>
            
            <NavLink to ="/manage"  >
            Manage Items
            </NavLink>
            <NavLink to ="/addItems" >
            Add Items
            </NavLink>
            <NavLink to ="/myItems" >
            My Items
            </NavLink>
            <NavLink to ="/blogs" >
            Blogs
            </NavLink>
            
        </NavMenu>
        <NavBtn>
        {user?<button>SignOut</button>: <NavBtnLink to = "/signin">
            Sign In
            </NavBtnLink>}

            <NavBtnLink to = "/signup">
            Sign Up
            </NavBtnLink>
           
        </NavBtn>

       </Nav>
      
      
       </div>
    );
};

export default Headers;