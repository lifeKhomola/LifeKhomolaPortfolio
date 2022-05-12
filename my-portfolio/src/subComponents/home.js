//home button

import React from 'react'
import styled from 'styled-components'
import {Home} from '../components/AllSvgs'
import {NavLink} from 'react-router-dom'
const HomeComponent = styled.div`
position:fixed;
top:2rem;
left:50%;
transform: translate(-50%, 0);
background-color: #FCF6F4;
padding:0.3rem;
border-radius:50%;
border: 1px solid #DC9918;
width:2.5rem;
height:2.5rem;
// display:flex;
justify-content:center;
align-items:center;
z-index: 3;
cursor:pointer;

&:hover{
    background-color: #e6ccb2;
    box-shadow: 0 0 8px 6px rgba(254, 127, 45, 1)

}
//navlink to light up and not to 
&>*:first-child{
    text-decoration:none;
    color:inherit;
}

`
const HomeBtn =()=>{
    return (
        <HomeComponent >
            <NavLink to='/'>
            <Home width={40} height={40} fill="currentColor"/>
            </NavLink>
        </HomeComponent>
    )
}

export default HomeBtn