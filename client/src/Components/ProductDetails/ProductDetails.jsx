
import { styled } from '@material-ui/core'
import React from 'react'
import Navbar from '../Navbar/Navbar'

const Container=styled.dev
const Wrapper=styled.dev`
padding:50px;
display:flex;
`;
const ImgContainer=styled.dev`
flex:1
`;
const Image=styled.dev
const InfoContainer = styled.dev
const Title=styled.h1
const Desc=styled.p
const Price=styled.span



function ProductDetails() {
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
            <Image src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGf7BxSDR3wjaYHl1wC5EXF9TtdAdLoJrlEg&usqp=CAU' />
            </ImgContainer>
            <InfoContainer>
                <Title> Denim shirt</Title>
                    <Desc>
                        
                    </Desc>
               <Price> $ 200</Price>
            </InfoContainer>

        </Wrapper>

    </Container>
  )
}

export default ProductDetails
