import React from 'react'
import {DarkTheme} from './Themes'
import styled,{ThemeProvider} from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import Home from '../subComponents/home'
import {Work} from "../data/WorkData"
import Card from '../subComponents/Card'

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




const Main = styled.div`
position:fixed;
top:12rem;
left:calc(10rem + 15vw);
height:40vh;
display:flex;
color:white;
`



const WorkPage =()=>{
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent  theme='dark'/>
                <SocialIcons  theme='dark'/>
                <Home/>
               <Main>
                   {
                   Work.map(d =>
                    <Card key={d.id} data={d}/>
                    )}
               </Main>
            </Box>
           
           
        </ThemeProvider>
    )
}

export default WorkPage