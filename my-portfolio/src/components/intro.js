import React from 'react'
import styled from 'styled-components'


const Box = styled.div`
position:absolute;
left:46.9%;
top:35%;
transform: translate(-50%,-50%)
width:100%;
display:flex;
height:40%;
background-repeat: no-repeat; 
background-size: 100% 2px;
background: linear-gradient( to right, white 50%, black 50%);

// background: linear-gradient(
//     to right,
//     ${props => props.theme.body} 50%,
//     ${props => props.theme.text} 50%) bottom,
//     linear-gradient(
//         to right,
//         ${props => props.theme.body} 50%,
//         ${props => props.theme.text} 50%) top,

// border-left: 2px solid ${props =>props.theme.body};
// border-right: 2px solid ${props =>props.theme.text};
   z-index:1;
`

const Intro =()=>{
    return (
        <Box>
            Introduction
        </Box>
    )
}

export default Intro