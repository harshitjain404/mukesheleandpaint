import React from "react";
import { motion } from "framer-motion";
import "./products.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Products = () => {
  return (
    <div className="products-container">
      <h1>Our Products</h1>

      <h3   className="products-description">
      Welcome to Mukesh Paints and Electric, your one-stop destination for high-quality construction and waterproofing supplies. Whether you're a professional contractor, a DIY enthusiast, or someone working on a home improvement project, we have everything you need to meet your construction and waterproofing requirements.


      </h3>

      <div className="product-grid">
        {/* Construction Materials (Image Left) */}
        <motion.div
          className="product-item"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <img
            src="https://static.wixstatic.com/media/84770f_961a8792073945619a15eed106a26bfe~mv2.jpg/v1/fill/w_660,h_324,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_961a8792073945619a15eed106a26bfe~mv2.jpg"
            alt="Construction Materials"
            className="product-image"
          />
          <div className="product-text">
            <h2>Construction Materials</h2>
            <p>
              Browse through our extensive collection of construction materials,
              including a variety of pipes, insulation, and construction
              chemicals.
            </p>
            <button className="view-more">View More</button>
          </div>
        </motion.div>

        {/* Waterproofing Solutions (Image Right) */}
        <motion.div
          
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
            <div className="product-item waterproofing">
          <div className="product-text">
            <h2>Waterproofing Solutions</h2>
            <p>
              Discover our range of waterproofing solutions, from sealants to
              membranes, designed to provide reliable protection against water
              damage.
            </p>
            <button className="view-more">View More</button>
            </div>
            <img
            src="https://static.wixstatic.com/media/84770f_208a3e4daafd436b8ae4bc99c8a46c3b~mv2.jpg/v1/fill/w_663,h_324,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_208a3e4daafd436b8ae4bc99c8a46c3b~mv2.jpg"
            alt="Waterproofing Solutions"
            className="product-image"
          />
          </div>

    
        </motion.div>

        {/* Tools and Equipment (Image Left) */}
        <motion.div
          className="product-item"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <img
            src="https://static.wixstatic.com/media/84770f_30a2215eb4fa49f9acee52a18d393058~mv2.jpg/v1/fill/w_660,h_324,al_tl,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_30a2215eb4fa49f9acee52a18d393058~mv2.jpg"
            alt="Tools and Equipment"
            className="product-image"
          />
          <div className="product-text">
            <h2>Tools and Equipment</h2>
            <p> Find the right tools and equipment for your construction tasks. Our range includes power tools, hand tools,
              safety gear, and specialized machinery that ensure precision and efficiency on the job site..</p>
            <button className="view-more">View More</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
