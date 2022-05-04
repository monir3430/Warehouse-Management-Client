import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink} from "./HeaderElements";


const Headers = () => {
    
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

            <NavBtnLink to = "/signup">
            Sign Up
            </NavBtnLink>
            <NavBtnLink to = "/signin">
            Sign In
            </NavBtnLink>
        </NavBtn>

       </Nav>
      
      
       </div>
    );
};

export default Headers;