import styled from "styled-components";
import {NavLink as Link} from "react-router-dom"



export const Nav = styled.nav`
background: #000;
height: 50px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 10000px)/2);
position: fixed;
top: 0;
width: 100%


`

export const NavLink=styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer:

&:hover{

   
    }

&.active {
    color: blue;
    

}

`

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
padding: 5px;

`
export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;


`
export const NavBtnLink = styled(Link)`
margin-left:15px;
color: white;
border-radius: 4px;
background: #256ce1;
padding: 10px 22px;
border: none;
outline: none;
cursor: pointer:
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: black;

    }

   
}


`