import Button from '@/components/Button'
import Center from '@/components/Center'
import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useContext } from 'react'
import { CartContext } from '@/components/CartContext'
import Table from '@/components/Table'
import Input from '../components/Input'

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr .8fr;
  }
  gap: 40px;
  margin-top: 40px;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
`;

const ProductImageBox = styled.div`
  width: 70px;
  height: 100px;
  padding: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img{
    max-width: 60px;
    max-height: 60px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 100px;
    height: 100px;
    img{
      max-width: 80px;
      max-height: 80px;
    }
  }
`;

const QuantityLabel = styled.span`
  padding: 0 15px;
  display: block;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 10px;
  }
`;

const CityHolder = styled.div`
  display:flex;
  gap: 5px;
`;

const cart = () => {
  const {cartProducts,addProduct,removeProduct} = useContext(CartContext);
  const [cartDisplay,setcartDisplay] = useState([
    {id:"1",title:"Iphone 14 pro",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:199,color:"black",image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487386_sd.jpg"},
    {id:"2",title:"Samsun galaxy S9",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:299,color:"black",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYuGlnk_ueOi9Xl2vSmTlfLIZ97RrfDoASSQ&usqp=CAU"},
    {id:"3",title:"Oppo F28",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:399,color:"black",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7CT_-Z8jVyWmzlneIb1Zi_f-h5uNxMGLq5Q&usqp=CAU"},
    {id:"4",title:"Nikia 3310",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:499,color:"black",image:"https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png"},
    {id:"5",title:"Iphone se ",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:599,color:"black",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyYrC2fBAudUmtnda_YbskB1xAkjcTb-7_0A&usqp=CAU"},
    {id:"6",title:"Ipad mini 5 pro",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:999,color:"black",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Qqo-UdIX054vewX_mGqeZBSTnbWwooaifg&usqp=CAU"},
  ])

 const increment=(id)=>{
  addProduct(id);
 }
 const decrement=(id)=>{
  removeProduct(id)
 }

 let total = 0;
  for (const productId of cartProducts) {
    // console.log()
    const price = cartDisplay.find(p => p.id === productId)?.price || 0;
    total += price;
  }
  return (
    <>
    <Header/>
    <Center>
      <ColumnsWrapper>
        <Box>
        <h2>Cart</h2>
           {!cartProducts?.length && (
            <div className='flex justify-center text-center pt-20 text-3xl'  >Your cart is empty</div>
           )}
           
            {cartDisplay?.length>0 && (
           <Table>
           <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                 
    
              {cartDisplay.map(cartDisplay=>(
                <tr>
                <ProductInfoCell key={cartDisplay.id}>
                  <ProductImageBox><img src={cartDisplay.image}/></ProductImageBox>
                  {cartDisplay.title}</ProductInfoCell>
                <ProductInfoCell> 
                    <Button onClick={()=>decrement(cartDisplay.id)} >-</Button>
                    <QuantityLabel>
                  {cartProducts.filter(id => id==cartDisplay.id).length }
                    </QuantityLabel>
                    <Button onClick={()=>increment(cartDisplay.id)} >+</Button>
                </ProductInfoCell>
                <ProductInfoCell>${cartProducts.filter(id => id==cartDisplay.id).length * cartDisplay.price }</ProductInfoCell>  
                  </tr>
              ))}

                   <tr>
                    <td></td>
                    <td></td>
                    <td>${total}</td>
                    </tr>    
              
                </tbody>
           </Table>
            )}
          
        </Box>
        {!!cartProducts?.length && (
        <Box>
          <h2>Order information</h2>
          <Input type='Text' placeholder='Name'/>
          <Input type='Text' placeholder='Email'/>
          <CityHolder>
          <Input type='Text' placeholder='City'/>
          <Input type='Text' placeholder='Postal code'/>
          </CityHolder>
          <Input type='Text' placeholder='Street address'/>
          <Input type='Text' placeholder='Country'/>
          <Button black block >Continue to payment</Button>
        </Box>
        )}
      </ColumnsWrapper>
    </Center>
    </>
  )
}

export default cart

