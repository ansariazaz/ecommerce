import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'



const Container = styled.div`
height:60px;
${mobile({height:"50px"})}
`;

const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items: center;
${mobile({padding:"10px 0px"})}
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.div`
font-size: 14px;
cursor: pointer;
${mobile({display:"none"})}
`
const SearchContainer = styled.div`
border:0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 20px;
padding: 5px;
`
const Input = styled.input`
border: none;
${mobile({width:"50px"})}
`

const Center = styled.div`
flex: 1;
`
const Logo = styled.h1`
font-weight:800;
text-align:center;
${mobile({fontSize:"24px"})}
`

const Right = styled.div`
flex: 1;
display:flex;
cursor: pointer;
align-items: center;
justify-content: flex-end;
${mobile({justifyContent:"center",flex:"2"})}

`
const MenuItem = styled.div`
font-size:16px;
margin-left:24px;
${mobile({marginLeft:"10px",fontSize:"14px"})}
`
function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer> 
                        <Input placeholder="SEARCH"></Input>
                        <Search style={{color:"gray",fontSize:16}}></Search>
                    </SearchContainer>
                </Left>
                <Center><Logo><b>BUZZZ.</b></Logo></Center>
                <Right>
                    <MenuItem >Register</MenuItem>
                    <MenuItem >LogIn</MenuItem>
                    <MenuItem > <Badge badgeContent={5} color="primary">
                        <ShoppingCartOutlined color="action" />
                    </Badge></MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
