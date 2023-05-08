import styled from "styled-components";
import ProductBox from "@/components/ProductBox";

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default function ProductsGrid() {
  return (
    <StyledProductsGrid>
      {products?.length > 0 && products.map(product => (
        <ProductBox key={product.id} {...product} />
      ))}
    </StyledProductsGrid>
  );
}
const products=[
  {id:"1",title:"Iphone 14 pro",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:199,color:"black",image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487386_sd.jpg"},
  {id:"2",title:"Samsun galaxy S9",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:299,color:"black",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYuGlnk_ueOi9Xl2vSmTlfLIZ97RrfDoASSQ&usqp=CAU"},
  {id:"3",title:"Oppo F28",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:399,color:"black",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7CT_-Z8jVyWmzlneIb1Zi_f-h5uNxMGLq5Q&usqp=CAU"},
  {id:"4",title:"Nikia 3310",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:499,color:"black",image:"https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png"},
  {id:"5",title:"Iphone se ",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:599,color:"black",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyYrC2fBAudUmtnda_YbskB1xAkjcTb-7_0A&usqp=CAU"},
  {id:"6",title:"Ipad mini 5 pro",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:999,color:"black",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Qqo-UdIX054vewX_mGqeZBSTnbWwooaifg&usqp=CAU"},
  {id:"7",title:"PlayStation 5",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:2999,color:"black",image:"https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png"},
  {id:"8",title:"Ipad mini 5 pro",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:999,color:"black",image:"00bd4abffd5582b9a7672e4d9f0feeb8.jpg"},
]