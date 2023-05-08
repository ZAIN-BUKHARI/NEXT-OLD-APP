import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import {useContext, useEffect} from "react";
import {CartContext} from "@/components/CartContext";
import { useRouter } from "next/router";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: .8fr 1.2fr;
  }
  gap: 40px;
  margin: 40px 0;
`;
const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Price = styled.span`
  font-size: 1.4rem;
`;

export default function ProductPage() {
  const {addProduct} = useContext(CartContext);
 const router = useRouter()
 const {id}=router.query;
  const product=[
    {id:"1",title:"Iphone 14 pro",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:199,color:"black",image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487386_sd.jpg"},
    {id:"2",title:"Samsun galaxy S9",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:299,color:"black",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYuGlnk_ueOi9Xl2vSmTlfLIZ97RrfDoASSQ&usqp=CAU"},
    {id:"3",title:"Oppo F28",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:399,color:"black",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7CT_-Z8jVyWmzlneIb1Zi_f-h5uNxMGLq5Q&usqp=CAU"},
    {id:"4",title:"Nikia 3310",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:499,color:"black",image:"https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png"},
    {id:"5",title:"Iphone se ",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:599,color:"black",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyYrC2fBAudUmtnda_YbskB1xAkjcTb-7_0A&usqp=CAU"},
    {id:"6",title:"Ipad mini 5 pro",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:999,color:"black",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Qqo-UdIX054vewX_mGqeZBSTnbWwooaifg&usqp=CAU"},
    {id:"7",title:"PlayStation 5",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:2999,color:"black",image:"https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png"},
    {id:"8",title:"Ipad mini 5 pro",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:999,color:"black",image:"00bd4abffd5582b9a7672e4d9f0feeb8.jpg"},
  ]
  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            {/* <img src={product} /> */}
            <ProductImages images={product[id].image} />
          </WhiteBox>
          <div>
            <Title>{product[id].title}</Title>
            <p>{product[id].desc}</p>
            <PriceRow>
              <div>
                <Price>${product[id].price}</Price>
              </div>
              <div>
                <Button primary onClick={() => addProduct(product.id)}>
                  <CartIcon />Add to cart
                </Button>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
      </Center>
    </>
  );
}




