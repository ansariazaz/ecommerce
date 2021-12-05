import React from 'react'
import styled from 'styled-components'
import img from '../Images/land.jpg'
import { mobile } from '../responsive'

const Container = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url(${img});
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`

const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color:white;
${mobile({width:"75%"})}`

const Title = styled.h1`
font-size: 28px;`

 
const Form = styled.form`
display: flex;
flex-wrap:wrap;`


const Input = styled.input`
flex:1;
min-width:40%;
padding: 12px;
margin:20px 10px 0px 0px;`


const Agreement = styled.span`
font-style: 12px;
margin:20px 10px;`

const Button = styled.button`
width: 35%;
border:none;
padding:16px 20px;
background-color:teal;
color:white;
font-size:16px;
font-weight:600;
cursor: pointer;`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="User Name" />
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                    <Agreement>By creating an account,I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
