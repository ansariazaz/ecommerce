import React from 'react'
import styled from 'styled-components';
import {products} from '../Data';
import Product from '../components/Product';  


const Container = styled.div`
padding:12px;
display: flex;
flex-wrap: wrap;
`



const Products = () => {
    return (
        <Container>
            {products.map((item)=>(
                <Product item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Products
