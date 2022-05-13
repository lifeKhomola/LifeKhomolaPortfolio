import React from 'react'
import styled from 'styled-components'
import Me from '../assets/Images/profile-img.png'



const Box = styled.div`
position:absolute;
left:50%;
top:50%;
transform: translate(-50%,-50%);
display:flex;
width:50%;
height:30%;
background-repeat: no-repeat; 
background-size: 100% 2px;
background: linear-gradient( to right, white 50%, black 50%) bottom,
linear-gradient( to right,white 50%, black 50%) top;
border-left: 2px solid ${props =>props.theme.body};
border-right: 2px solid ${props =>props.theme.text};
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
const SubBox = styled.div`
width:50%;
position:relative;
display:flex;

.pic{
    position:absolute;
    bottom:0;
    left:50%;
    transform: translate(-50%,0%);
    width:100%;
    height:auto;

}
`
const Text = styled.div`

`

const Intro =()=>{
    return (
        <Box>
            <SubBox>
                <Text>
                    <h1>Hi, </h1>
                    <h3>I'm LifeKhomola</h3>
                    <h6>I design and develop web/mobile responsive applications and websites</h6>

                </Text>
                </SubBox> 
                <SubBox>
                    <div>
                        <img className='pic' src={Me} alt="Profile Pic"/>
                    </div>
                </SubBox>
        </Box>
    )
}

export default Intro