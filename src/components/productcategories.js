import React from 'react';  
import './productcategories.css';  
const ProductCategories = () => {  
  return (  
    <div className="product-categories">  

      <h1>Our Product Categories</h1>  
      <img
          src="https://static.wixstatic.com/media/84770f_0ae67e812c74418ab1cad6522475f6ed~mv2.jpg/v1/fill/w_662,h_479,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_0ae67e812c74418ab1cad6522475f6ed~mv2.jpg"
          alt="Tools"
          className="product-categories-image"
        />

      <div className="categories">  
        <div className="category">  
          <h2>Paints</h2>  
          <p>Premium Quality Paints</p>  
          <div className="separator"></div>  
        </div>  
        <div className="category">  
          <h2>Construction Tools</h2>  
          <p>Essential Construction Tools</p>  
          <div className="separator"></div>  
        </div>  
        <div className="category">  
          <h2>Waterproofing Solutions</h2>  
          <p>Effective Waterproofing Products</p>  
          <div className="separator"></div>  
        </div>  
        <div className="category">  
          <h2>Electrical Supplies</h2>  
          <p>Quality Electrical Products</p>  
          <div className="separator"></div>  
        </div>  
      </div>  
      <button className="explore-button">Explore All Products</button>  
    </div>  
  );  
};  

export default ProductCategories;