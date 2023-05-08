import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Button from './Button'
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";

const Box = styled.div`
background-color: #fff;
padding: 20px;
height: 120px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
img{
  max-width: 100%;
  max-height: 80px;
}
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size:.9rem;
  color:inherit;
  text-decoration:none;
  margin:0;
`;
const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content:space-between;
  margin-top:2px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight:400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight:600;
    text-align: left;
  }
`;
const ProductWrapper=styled.div``;

const ProductBox = ({id,title,price,desc,image}) => {
  const {addProduct} = useContext(CartContext);
  return (
    <Link href={`/product/${id}`}>
 <ProductWrapper>
    <Box>
        <div>
        <img src={image} alt="" />
        </div>
    </Box>
    <ProductInfoBox>
      <Title href={'/'}>{title}</Title>
      <PriceRow>
        <Price>${price}</Price>
        <Button onClick={() => addProduct(id)} block primary outline >Add to cart</Button>
        </PriceRow>    
    </ProductInfoBox>
    </ProductWrapper>
    </Link>

  )
}

export default ProductBox