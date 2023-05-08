import React from 'react'
import Header from '@/components/Header'
import Featured from '@/components/Featured'
import NewProducts from '@/components/NewProducts'

const index = () => {
 
 
  return (
    <div>
    <Header/>
    <Featured/>
    <NewProducts/>
    </div>
  )
}

export default index

// export async function getServerSideProps() {
//   // const featuredProductId = '640de2b12aa291ebdf213d48';
//   await mongooseConnect();
//   // const featuredProduct = await Product.findById(featuredProductId);
//   // const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
//   const newProducts = await Fake.find();
//   return {
//     props: {
//       // featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
//       newProducts: JSON.parse(JSON.stringify(newProducts)),
//     },
//   };
// }