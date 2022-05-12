import React,{useState} from 'react'
import styled, {keyframes} from 'styled-components'
// import PowerButton from '../subComponents/PowerButton'
import HomeBtn from '../subComponents/home'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import {NavLink} from 'react-router-dom'
import {YinYang} from '../components/AllSvgs'
import Intro from '../components/intro'


const MainContainer = styled.div`
background:${props =>props.theme.body};
width:100vw;
height:100vh;
overflow:hidden;
position:relative;
h2,h3,h4,h5,h6{
    font-family:'Karla',sans-serif;
    font-weight:500;
}
`
const Container = styled.div`
padding:2rem;
`

const Contact = styled(NavLink)`
color:${prop => prop.theme.text};
position:absolute;
top:3rem;
right:100px;
text-decoration:none;
// right:calc(1rem+ 2vw);
z-index:3;

`
const Blog = styled(NavLink)`
color:${prop => prop.theme.text};
position:absolute;
top:50%;
right: calc(1rem + 2vw);
transform: translate(-50%,-50%)  rotate(90deg);
text-decoration:none;
// right:calc(1rem+ 2vw);
z-index:1;

`
const Work = styled(NavLink)`
color:${prop => prop.click ? prop.theme.body: prop.theme.text};
position:absolute;
top:50%;
left: 2rem;
transform: translate(-50%,-50%) rotate(-90deg);
text-decoration:none;
// right:calc(1rem+ 2vw);
z-index:1;

`
const BottonBar = styled.div`
position:absolute;
bottom:1rem;
left:0;
right:0;
width:100%;
display:flex;
justify-content: space-evenly;

`
const About = styled(NavLink)`
color:${prop => prop.click ? prop.theme.body: prop.theme.text};
text-decoration:none;
z-index:1;

`
const Skills = styled(NavLink)`
color:${prop => prop.theme.text};
text-decoration:none;
z-index:1;
`
const rotate = keyframes`
from{
    transform:rotate(0)
}
to{
    transform:rotate(360deg)
}
`
const Center = styled.button`
position:absolute;
top:${props => props.click ? '80%':'50%'};
left:${props => props.click ? '92%':'50%'};
transform: translate(-50%,-50%);
border:none;
outline:none;
background-color: transparent;
cursor:pointer;
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
transition: all 1s ease;

&>*:first-child{
    animation: ${rotate} infinite 3s linear;

}

&>*:last-child{
    display :${props => props.click ? 'none':'inline-block'};
    padding-top:1rem;

}
`

const DarkDiv = styled.div`
position :absolute;
top:0;
background-color:#000;
bottom:0;
right:50%;
width:${props => props.click ? '50%':'0%'};
height:${props => props.click ? '100%':'0%'};
transition: height 0.5s ease,width 1s ease;

`


const Main =()=>{

    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <MainContainer>
               <DarkDiv click={click}/>
           <Container>
               <HomeBtn/>
               <LogoComponent theme={click ? 'dark' : 'light'}/>
               <SocialIcons theme={click ? 'dark' : 'light'}/>
            
               <Center click={click}>
                   <YinYang onClick={()=>handleClick()} width={click ? 120:200} height={click ? 120:150}   fill='currentColor'/>
                   <span>Click here</span>
               </Center>
               <liveVK/>
               <Contact target="_blank" to={{pathname:"mailto:khomolavhutshilo5@gmail.com"}}>
                   <h3>Contant Me</h3>
               </Contact>
               <Blog to='/blog'>
                    <h3>Blog</h3>
               </Blog>
               <Work to='/work' click={click}>
                    <h3>Work</h3>
               </Work>
               <BottonBar>
                   <About to='/about' click={click}>
                        <h3>About Me</h3>
                   </About>
                   <Skills to='/skills'>
                        <h3>My Skills</h3>
                   </Skills>
               </BottonBar>

           </Container>
           {click ? <Intro click={click}/> : null}
        </MainContainer>
    )
}

export default Main