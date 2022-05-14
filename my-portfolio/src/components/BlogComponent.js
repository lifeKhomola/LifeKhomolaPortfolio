import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
width:calc(10rem + 15vw);
text-decoration:none;
height:20rem;
padding:1rem;

`

const BlogComponent =()=>{
    return (
        <Box to='/'>
            Blog item 
        </Box>
    )
}

export default BlogComponent