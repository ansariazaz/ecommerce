import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-weight: 600;
letter-spacing: 2px;
${mobile({fontSize:"12px"})}
`


function Announcement() {
    return (
        <Container>
           SUPER DHAMAKA!!! 50% OFF ON ALL PRODUCT 
        </Container>
    )
}

export default Announcement
