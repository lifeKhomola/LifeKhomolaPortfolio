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