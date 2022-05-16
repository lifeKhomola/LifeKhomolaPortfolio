import React from 'react'
import {DarkTheme} from './Themes'
import styled,{ThemeProvider} from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import Home from '../subComponents/home'
import ParticleComponent from '../subComponents/DarkParticlesComponent'
import astronaut from "../assets/Images/spaceman.png";
import { keyframes } from 'styled-components'

const Box = styled.div`
background-color: ${props => props.theme.body};
width:100%;
height:100vh;
position:relative;
display:flex;
justify-content: space-evenly;
align-items: center;
overflow:hidden;
`
const float = keyframes`
0%{ transform:translateY(-10px)}
50%{transform:translateY(15px) translateX(15px)}
100%{transform:translateY(-10px)}

`

const Spaceman = styled.div`
position :absolute;
top:10%;
right:5%;
width:20vh;
animation: ${float} 4s ease infinite;
img{
    width:100%;
    height:auto;
}

`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem;
width:50vw;
height:60vh;
z-index: 3;
line-height: 1.5;
display:flex;
justify-content:center;
font-size:calc(0.6rem  + 1vw);
backdrop-filter: blur(4px);
position:absolute;
left:calc(5rem + 5vw);
top:10rem;
font-family:"Ubuntu Mono",monospace;
`

const AboutPage =()=>{
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
            <ParticleComponent theme='dark'/>
                <LogoComponent  theme='dark'/>
                <SocialIcons  theme='dark'/>
                <Home/>
                <Spaceman>
                    <img src={astronaut} alt="spaceman" />
                </Spaceman>
            </Box>
            <Main>
                I am vhutshilo
            </Main>
           
        </ThemeProvider>
    )
}

export default AboutPage