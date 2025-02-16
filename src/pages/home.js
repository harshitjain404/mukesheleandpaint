import React from 'react'
import "./home.css"
import Slider from "../components/slider"


function Home() {
  const imageArray = [
   "https://5.imimg.com/data5/SELLER/Default/2023/4/299991982/FB/BZ/BS/50359240/asian-paints-all-product.jpg",
   "https://dduzkvnw6iy47.cloudfront.net/assets/images/categories/1619169696608291a06f762.webp",
   "https://100pillars.in/wp-content/uploads/2023/04/Building-materials-industry-%E2%80%93-Retrospect-2020-min.jpg"
  ];
  return (
    <div>
        <h1 className='libre-baskerville-bold'>Welcome to mukesh paints and electric</h1>
        <h3 className='libre-baskerville-bold'>Construction and water proofing  
         <br/>supplies for every project</h3>
         <div>
      <Slider images={imageArray} autoSlide={true} slideInterval={2000} />
 

    </div>
  

    </div>
  )
}

export default Home