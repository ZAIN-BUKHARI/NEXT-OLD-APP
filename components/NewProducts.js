import React from 'react'
import styled from 'styled-components'
import ProductBox from './ProductBox';
import Center from './Center';


const StyleDiv = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr;
gap:20px;
padding-top:20px;
`;
const Title = styled.h2`
  font-size: 2rem;
  margin:30px 0 20px;
  font-weight: normal;
`;

const NewProducts = () => {
  return (
    <Center>
        <Title>New Arrivals</Title>
    <StyleDiv>
        {products.length>0 && products.map(products=>(
            <ProductBox {...products} />
        ))}
    </StyleDiv>
    </Center>
  )
}

export default NewProducts



const products=[
    {id:"1",title:"Iphone 14 pro",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:199,color:"black",image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487386_sd.jpg"},
    {id:"2",title:"Samsun galaxy S9",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:299,color:"black",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYuGlnk_ueOi9Xl2vSmTlfLIZ97RrfDoASSQ&usqp=CAU"},
    {id:"3",title:"Oppo F28",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:399,color:"black",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7CT_-Z8jVyWmzlneIb1Zi_f-h5uNxMGLq5Q&usqp=CAU"},
    {id:"4",title:"Nikia 3310",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:499,color:"black",image:"https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png"},
    {id:"5",title:"Iphone se ",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:599,color:"black",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyYrC2fBAudUmtnda_YbskB1xAkjcTb-7_0A&usqp=CAU"},
    {id:"6",title:"Ipad mini 5 pro",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:999,color:"black",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Qqo-UdIX054vewX_mGqeZBSTnbWwooaifg&usqp=CAU"},
]