import React from 'react'
import styled from 'styled-components'

const Logo = styled.h1`
display:inline-block;
color:${props => props.theme.text};
font-family:"Pacifico",cursive;
position:fixed;
top:2rem;
left:2rem;

`

const LogoComponent =()=>{
    return (
       <Logo>
           Life VK
       </Logo>
    )
}

export default LogoComponent