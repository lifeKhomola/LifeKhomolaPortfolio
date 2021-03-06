import React from 'react'
import {lightTheme} from './Themes'
import styled,{ThemeProvider} from 'styled-components'
import { Design,Developer } from './AllSvgs'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import Home from '../subComponents/home'
import ParticleComponent from '../subComponents/ParticlesComponent'
import BigTitle from '../subComponents/BigTitle'

const Box = styled.div`
background-color: ${props => props.theme.body};
width:100%;
height:120vh;
position:relative;
display:flex;
justify-content: space-evenly;
align-items: center;

`
const Container = styled.div`
@media only screen and (max-width: 680px) {
    /* styles for browsers larger than 960px; */
    
    z-index:1;
  
}
@media only screen and (min-width: 680px) {
    /* styles for browsers larger than 960px; */
    display:flex;
    z-index:1;
  
}


`
const Main = styled.div`
@media only screen and (max-width: 680px) {
    /* styles for browsers larger than 960px; */
  
    width: 60vw;
    height:;
    margin-bottom: 4rem;
   

}
@media only screen and (min-width: 680px) {
    /* styles for browsers larger than 960px; */
  
    width: 30vw;
    height:;
    right:55vw;
    margin-left: 4rem;
   

}

border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 1rem;
width:30vw;
height:;
z-index:3;
// line-height:1.5;
cursor:pointer;
font-family:'Ubuntu Mono', monospace;
display:flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}

`
const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1rem + 1 vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body}
    }
}
&>*:first-child{
    margin-left: 1rem;
}
`
const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;

${Main}:hover &{
   
        color:${props => props.theme.body}
    
}
strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left:2rem;
}



`

const MySkillsPage =()=>{
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
            <ParticleComponent theme='light'/>
                <LogoComponent  theme='light'/>
                <SocialIcons  theme='light'/>
                <Home/>
                <BigTitle text="Skills"  top='0%' right='10%'/>
                <Container>
                <Main>
              
              <Title>
                  <Design width={40} height={40}/> Backend Developer
              </Title>
              <Description> I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.</Description>
              <Description>
                  
                  <strong>Skills</strong>
                  <ul>
                      <li>
                          Web Design
                      </li>
                      <li>
                          Web Design  
                      </li>   
                  </ul>
              </Description>
              <Description>
                  
                  <strong>Tools</strong>
                  <ul>
                      <li>
                          Web Design
                      </li>
                      <li>
                          Web Design
                      </li>   
                  </ul>
              </Description>  
       </Main>
       <Main> 
       <Title>
                  <Developer width={40} height={40}/> Frontend Developer
              </Title>
       
       <Description>
       I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.

              </Description>
              <Description>
                  <strong>Skills</strong>
                  <ul>
                      <li>
                          Web Design
                      </li>
                      <li>
                          Web Design
                      </li>   
                  </ul>
              </Description>
              <Description>
                  
                  <strong>Tools</strong>
                  <ul>
                      <li>
                          Web Design
                      </li>
                      <li>
                          Web Design
                      </li>   
                  </ul>
              </Description> 
              </Main> 
                </Container>
               
            </Box>
        </ThemeProvider>
    )
}

export default MySkillsPage