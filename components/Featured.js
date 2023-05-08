import React from 'react'
import Center from './Center'
import styled from "styled-components";
import Button from './Button'
import CartIcon from './icons/CartIcon';
import ButtonLink from './ButtonLink'
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";

const Bg = styled.div`
  background-color: #222;
  color:#fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin:0;
  font-weight:normal;
  font-size:1.5rem;
  @media screen and (min-width: 768px) {
    font-size:3rem;
  }
`;

const Desc = styled.p`
  color:#aaa;
  font-size:.8rem;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img{
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img{
      max-width: 100%;
    }
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap:10px;
  margin-top:25px;
`;
const Featured = () => {
  const {addProduct} = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product.id);
  }
  return (
     <Bg>
        <Center>
            <ColumnsWrapper>
               <Column>
                  <div>
                  <Title>{product.title}</Title>
            <Desc>{product.desc}
            </Desc>
            <ButtonsWrapper>
                <ButtonLink outline={1} white={1} href={'/'}>Read more</ButtonLink>
                 <Button white onClick={addFeaturedToCart} >
                  <CartIcon />
                  Add to cart
                 </Button>
               </ButtonsWrapper> 
                  </div>
               </Column>
               <Column>
               <img src={product.image} alt="" />
               </Column>
            </ColumnsWrapper>
        </Center>
     </Bg>
  )
}

export default Featured


const product={
    title:"Macbook Pro 14",
    desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",
    image:"https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png",
    id:8,
}