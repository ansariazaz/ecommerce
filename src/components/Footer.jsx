import { Email, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import img from '../Images/payment.png'
import { mobile } from '../responsive'

const Container = styled.div`
display: flex;
${mobile({flexDirection:"column"})}
`
const Left = styled.div`
display: flex;
flex-direction: column;
padding: 20px; 
flex:1;`
const Logo = styled.h1`
`
const Desc = styled.p`
margin: 24px 0px;
`
const SocialContainer = styled.div`
display: flex;
margin: 16px 0px;

`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;
`
const Center = styled.div`
padding: 20px;
flex:1;
${mobile({display:"none"})}`

const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style:none;
display: flex;
flex-wrap:wrap;`
const ListItem = styled.li`
width: 50%;
margin-bottom: 16px;
cursor: pointer;`
const Right = styled.div`
flex:1;
padding: 20px;`

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
    
`
const Payment = styled.img`
 width:60% ;
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>BUZZZ.</Logo>
                <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut totam modi dicta itaque laboriosam quasi dolorem corporis in nobis dolorum asperiores nostrum, sed amet dolore illo. Natus unde nisi quisquam.
                    Perspiciatis, placeat incidunt nihil neque  fuga repellendus nisi quod eum quas recusandae sint facere magnam cupiditate?</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left> 
            <Center>
                <Title>Usefull Links</Title>
                <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Terms & Condition</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style = {{marginRight:"20px"}}/> Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</ContactItem>
                <ContactItem><Phone style = {{marginRight:"20px"}}/> +91 999290000</ContactItem>
                <ContactItem><Email style = {{marginRight:"20px"}}/>  Buzzzteam@gmail.com</ContactItem>
                <Payment src={img}/>
            </Right>
        </Container>
    )
}

export default Footer
