import React from 'react'
import styled from 'styled-components'
import PowerButton from '../subComponents/PowerButton'
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
const Main =()=>{
    return (
        <MainContainer>
           <Container>
               <PowerButton/>
               <LogoComponent/>
               <SocialIcons/>
               <Contact target="_blank" to={{pathname:"mailto:khomolavhutshilo5@gmail.com"}}>
                   <h3>Contant Me</h3>
               </Contact>
           </Container>
        </MainContainer>
    )
}

export default Main