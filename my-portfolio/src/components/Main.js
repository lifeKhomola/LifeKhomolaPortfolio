import React from 'react'
import styled from 'styled-components'
// import PowerButton from '../subComponents/PowerButton'
import HomeBtn from '../subComponents/home'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import {NavLink} from 'react-router-dom'
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
color:${prop => prop.theme.text};
position:absolute;
top:50%;
left: 2rem;
transform: translate(-50%,-50%) rotate(-90deg);
text-decoration:none;
// right:calc(1rem+ 2vw);
z-index:1;

`
const Main =()=>{
    return (
        <MainContainer>
           <Container>
               <HomeBtn/>
               <LogoComponent/>
               <SocialIcons/>
               <Contact target="_blank" to={{pathname:"mailto:khomolavhutshilo5@gmail.com"}}>
                   <h3>Contant Me</h3>
               </Contact>
               <Blog to='/blog'>
                    <h3>Blog</h3>
               </Blog>
               <Work to='/work'>
                    <h3>Work</h3>
               </Work>

           </Container>
        </MainContainer>
    )
}

export default Main