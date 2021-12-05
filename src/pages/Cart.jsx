import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import img from '../Images/shoes2.png'
import img1 from '../Images/jac.png'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
padding: 20px;
${mobile({padding:"10px"})}`

const Title = styled.h1`
text-align:center;
font-weight:300;`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px; `

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type === "filled" ? "black":"transparent"};
color: ${props=>props.type === "filled" && "white"};
`
const TopTexts = styled.div`
${mobile({display:"none"})}
`
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;  
margin: 0px 10px;
`
const Buttom = styled.div`
display: flex;
justify-content:space-between;
${mobile({flexDirection:"column"})}` 

const Info = styled.div`
flex:3;` 



const Product = styled.div`
display: flex;
justify-content:space-between;
${mobile({flexDirection:"column"})}`

const ProductDetail = styled.div`
flex:2;
display: flex;`

const Image = styled.img`
width: 30%;
${mobile({width:"40%"})}
`
const Details = styled.div`
padding: 10px;
display: flex;
flex-direction:column;
justify-content:space-around;
font-size:20px;`
const ProductName = styled.span``
const ProductId = styled.span``

const ProductColor = styled.span`
width: 24px;
height: 24px;
border-radius:50%;
background-color:${props=>props.color};`

const ProductSize = styled.span``


const PriceDetail = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;`

const ProductAmountContainer = styled.div`
display: flex;
align-items: center; `


const ProductAmount = styled.div`
font-size:28px;
margin: 5px;
${mobile({margin:"5px 16px"})}`


const ProductPrice = styled.div`
font-size:30px;
${mobile({marginBottom:"20px"})}`

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`
const Summary = styled.div`
flex:1;
border:0.5px solid lightgray;
border-right: 10px;
height: 50vh;
padding: 20px;

` 
const SummaryTitle = styled.h1`
font-weight: 300;
`

const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight:${props=>props.type==="total" && "600"};
font-size:${props=>props.type==="total" && "24px"};`

const SummaryItemText = styled.span``


const SummaryItemPrice = styled.span``


const Button = styled.button`
width: 100%;
padding: 10px;
background-color:black;
color: white;
font-weight: 600;
`



const Cart = () => {
    return (
        <Container>
           <Navbar/>
           <Announcement/>
           <Wrapper>
           <Title>YOUR BAG</Title>
           <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
           </Top>
           <Buttom>
            <Info>
            <Product>
            <ProductDetail>
                <Image src={img1}/>
                <Details>
                <ProductName><b>Product:</b>ROADSTER JACKET</ProductName>
                <ProductId><b>ID:</b>656756754555</ProductId>
                <ProductColor color="	#FF7F50"/>
                <ProductSize><b>Size:</b>M</ProductSize>
                </Details>
            </ProductDetail>
            <PriceDetail>
                <ProductAmountContainer>
                    <Add/>
                    <ProductAmount>1</ProductAmount> 
                    <Remove/>
                </ProductAmountContainer>
                <ProductPrice> Rs 3800</ProductPrice>
            </PriceDetail>
            </Product>
            <Hr/>
            <Product>
            <ProductDetail>
                <Image src={img}/>
                <Details>
                <ProductName><b>Product:</b>FLYING MACHINE SHOES</ProductName>
                <ProductId><b>ID:</b>656756755645</ProductId>
                <ProductColor color="	#c5972d"/>
                <ProductSize><b>Size:</b>37.5</ProductSize>
                </Details>
            </ProductDetail>
            <PriceDetail>
                <ProductAmountContainer>
                    <Add/>
                    <ProductAmount>2</ProductAmount> 
                    <Remove/>
                </ProductAmountContainer>
                <ProductPrice> Rs 1800</ProductPrice>
            </PriceDetail>
            </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Sub-total</SummaryItemText>
                    <SummaryItemPrice>Rs 5400</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Charge</SummaryItemText>
                    <SummaryItemPrice>Rs +200</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Discount</SummaryItemText>
                    <SummaryItemPrice>Rs -500</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>Rs 5100</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
           </Summary>   
           </Buttom>
           </Wrapper>
           <Footer/>
        </Container>
    )
}

export default Cart
 