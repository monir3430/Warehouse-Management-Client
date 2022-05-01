import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink} from "./HeaderElements";


const Headers = () => {
    
    return (
       <>
       
       <Nav>

        <NavMenu>
            <NavLink to ="/Inventory" >
                Inventory
            </NavLink>
            <NavLink to ="/ManageItems"  >
            Manage Items
            </NavLink>
            <NavLink to ="/AddItems" >
            Add Items
            </NavLink>
            <NavLink to ="/MyItems" >
            My Items
            </NavLink>
            <NavLink to ="/Blogs" >
            Blogs
            </NavLink>
            <NavLink to ="/Signup" >
                Sign Up
            </NavLink>
        </NavMenu>
        <NavBtn>

            <NavBtnLink to = "/Signin">
            Sign In
            </NavBtnLink>
        </NavBtn>

       </Nav>
      
      
       </>
    );
};

export default Headers;