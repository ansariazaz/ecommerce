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
width: 32%;
padding: 20px;
background-color:white;
${mobile({width:"75%"})}`

const Title = styled.h1`
font-size: 28px;`

 
const Form = styled.form`
display: flex;
flex-direction:column;`


const Input = styled.input`
flex:1;
min-width:40%;
padding: 12px;
margin:12px 0px;`


const Button = styled.button`
width: 35%;
border:none;
padding:16px 20px;
background-color:teal;
color:white;
font-size:16px;
font-weight:600;
cursor: pointer;
margin-bottom: 10px;`

const Link = styled.a`
margin: 5px 0px;
font-size:14px;
text-decoration: underline;
cursor: pointer;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>           
                    <Input placeholder="User Name" /> 
                    <Input placeholder="Password" />
                    <Button>LOGIN</Button>
                    <Link>DO NOT REMEMBER THE PASSWORD ?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login