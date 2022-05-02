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
            
        </NavMenu>
        <NavBtn>

            <NavBtnLink to = "/Signup">
            Sign Up
            </NavBtnLink>
            <NavBtnLink to = "/Signin">
            Sign In
            </NavBtnLink>
        </NavBtn>

       </Nav>
      
      
       </>
    );
};

export default Headers;