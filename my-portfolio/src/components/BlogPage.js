import React from 'react'
import styled from 'styled-components'
import img from  '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import Home from '../subComponents/home'
import BlogComponent from '../components/BlogComponent'
import {Blogs} from '../data/BlogData'



const MainContainer = styled.div`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-position:center;
background-attachment:fixed;

`
const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width:100%;
height:auto;
position:relative;
paddding-bottom:5rem;
`
const Center = styled.div`

display:flex;
justify-content:center;
align-items:center;
padding-top:10rem;

`
const Grid = styled.div`
@media only screen and (max-device-width: 480px) {
    /* styles for browsers larger than 960px; */
    width: calc(60vw);
    // display:column;
    grid-template-columns: none;
}
display:grid;
grid-template-columns: repeat(2,minmax(calc(10rem + 15vw),1fr));
grid-gap:calc(1rem + 2vw);


`

const BlogPage =()=>{
    return (
        <MainContainer>
           <Container>
                <LogoComponent/>
                <Home/>
                <SocialIcons/>
                <Center>
                    <Grid>
                    {
                        Blogs.map(blog =>{
                           return <BlogComponent
                            key={blog.id}
                            blog={blog}
                            />
                        })
                    }

                    </Grid>
                </Center>
           </Container>
        </MainContainer>
    )
}

export default BlogPage