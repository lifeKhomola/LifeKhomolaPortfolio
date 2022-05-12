import React from 'react'
import {NavLink} from 'react-router-dom'
import {Github} from '../components/AllSvgs'
import {Twitter} from '../components/AllSvgs'
import {YouTube} from '../components/AllSvgs'
import {Facebook} from '../components/AllSvgs'
import styled from 'styled-components'
import {DarkTheme} from '../components/Themes'

const Icons =styled.div`
display:flex;
flex-direction:column;
align-items:center;
position:fixed;
bottom:0;
left:2rem;
x-index:3;
&>*:not(:last-child){
    margin:0.5rem 0;
}
`
const Line = styled.span`
width:2px;
height:8rem;
background-color: ${props => props.color ==="dark" ? DarkTheme.text : DarkTheme.body};
`
const SocialIcons = (props)=>{
    return (
        <Icons>
          <div>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https:github/lifeKhomola"}}>
                <Github width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}/>
            </NavLink>
          </div>
          <div>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https:github/lifeKhomola"}}>
                <Twitter width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}/>
            </NavLink>
          </div>
          <div>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https:github/lifeKhomola"}}>
                <YouTube width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}/>
            </NavLink>
          </div>
          <div>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https:github/lifeKhomola"}}>
                <Facebook width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}/>
            </NavLink>
          </div>
          <Line color={props.theme}/>
        </Icons>
    )
}

export default SocialIcons