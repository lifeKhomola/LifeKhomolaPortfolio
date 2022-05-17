import React from 'react'
import styled from 'styled-components'
import Me from '../assets/Images/Vhutshilo-2-removebg-preview.png'
import {motion} from 'framer-motion'




const Box = styled(motion.div)`
position:absolute;
left:50%;
top:50%;
transform: translate(-50%,-50%);
display:flex;
width:55vw;
//height:55vh;

background: linear-gradient( to right, white 50%, black 50%) bottom,
linear-gradient( to right,white 50%, black 50%) top;
background-repeat: no-repeat; 
background-size: 100% 2px;
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
@media only screen and (max-device-width: 480px) {
    /* styles for browsers larger than 960px; */
  
    flex-direction:flex;
    display:block;
}
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
// font-size:25px;
color: ${props => props.theme.body};
padding-left:1rem;
cursor:pointer;
display:flex;
flex-direction:column;
justify-content:none;

`


const Intro =()=>{
    return (
        <Box
        initial={{height:0}}
        animate={{height:''}}
        transition={{type:'spring',duration:2,delay:1 }}
        >
            <SubBox>
                <Text
                >
                    <h1 >Hi, </h1>
                    <h2>I'm Vhutshilo Khomola.</h2>
                    <h3>I Design and Develop Web/Mobile Responsive Applications and Websites</h3>

                </Text>
                </SubBox> 
                <SubBox>
                    <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:'1'}}
                    transition={{duration:2,delay:1 }}
                    >
                        <img className='pic' src={Me} alt="Profile Pic"/>
                    </motion.div>
                </SubBox>
        </Box>
    )
}

export default Intro