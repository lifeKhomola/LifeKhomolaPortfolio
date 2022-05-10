import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
background:${props =>props.theme.body};
width:100vw;
height:100vh;
overflow:hidden;
position:relative;

`
const Main =()=>{
    return (
        <MainContainer>
            Main component/page
        </MainContainer>
    )
}

export default Main