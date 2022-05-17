import React, { useEffect, useRef } from 'react'
import {DarkTheme} from './Themes'
import styled,{ThemeProvider} from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import Home from '../subComponents/home'
import {Work} from "../data/WorkData"
import Card from '../subComponents/Card'
import BigTitle from '../subComponents/BigTitle'

const Box = styled.div`
background-color: ${props => props.theme.body};
// width:100%;
height:400vh;
position:relative;
overflow:hidden;

`


const Main = styled.div`
@media only screen and (max-device-width: 480px) {
    /* styles for mobile browsers smaller than 480px; (iPhone) */
    width: 10rem;
    margin-right: 4rem;
    height: 40vh;
 }
 @media only screen and (max-width: 960px) {
    /* styles for browsers larger than 960px; */
    width: 10rem;
    margin-right: 4rem;
    height: 40vh;
    left:calc(5rem + 5vw);
}
@media only screen and (min-width: 1440px) {
    /* styles for browsers larger than 1440px; */
}
@media only screen and (min-width: 2000px) {
    /* for sumo sized (mac) screens */
}
// @media only screen and (device-width: 768px) {
//    /* default iPad screens */
//    width: 10rem;
//    margin-right: 4rem;
//    height: 40vh;
   
// }
/* different techniques for iPad screening */
@media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait) {
  /* For portrait layouts only */
}

// @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape) {
//   /* For landscape layouts only */
//   width: 10rem;
//     margin-right: 4rem;
//     height: 40vh;
// }
// @media only screen and (min-device-width: 350px) and (max-device-width: 1024px) and (orientation:landscape) {
//     /* For landscape layouts only */
//     width: 10rem;
//       margin-right: 4rem;
//       height: 40vh;
//   }

position:fixed;
top:12rem;
left:calc(10rem + 15vw);
height:40vh;
display:flex;
color:white;

`



const WorkPage =()=>{

    const ref = useRef(null);
    
    useEffect(()=>{
        let element = ref.current;
        const rotate = () => {
            element.style.transform = `translateX(${-window.pageYOffset}px)`
        }
        window.addEventListener('scroll',rotate);
        return () => window.removeEventListener('scroll',rotate);
    },[])

    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent  theme='dark'/>
                <SocialIcons  theme='dark'/>
                <Home/>
               <Main ref={ref}>
                   {
                   Work.map(d =>
                    <Card key={d.id} data={d}/>
                    )}
               </Main>
               <BigTitle text="work" top='20%' right=''/>
            </Box>
           
           
        </ThemeProvider>
    )
}

export default WorkPage