import React from 'react'
import {DarkTheme} from '../components/Themes'
import styled from 'styled-components'

const Logo = styled.h1`
display:inline-block;
color:${props => props.color === "dark" ? DarkTheme.text : DarkTheme.body};
font-family:"Pacifico",cursive;
position:fixed;
top:2rem;
left:2rem;

`

const LogoComponent =(props)=>{
    return (
       <Logo color={props.theme}>
           Life VK
       </Logo>
    )
}

export default LogoComponent