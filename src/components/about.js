import React from 'react'
import "./about.css"
function About() {
  return (
    <div className="about-container">
     <h1>About Us </h1>
              <div className="about-content-homepg ">

             
        <img
          src="https://static.wixstatic.com/media/84770f_0ae67e812c74418ab1cad6522475f6ed~mv2.jpg/v1/fill/w_662,h_479,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_0ae67e812c74418ab1cad6522475f6ed~mv2.jpg"
          alt="Tools"
          className="about-image"
        />
        <p className="about-text">
          Mukesh Paints and Electric is your go-to destination for all your
          construction and waterproofing needs. We take pride in offering a
          wide range of high-quality products to ensure that you have
          everything you require for your construction and waterproofing
          projects. From essential construction materials to cutting-edge
          waterproofing solutions, we are committed to providing reliable
          products to meet all your requirements.
           <br/>      <br/>     <br/>
       
    <a   className='story-btn' href='/about'> Our Story </a>
   
        </p>
      </div>

    </div>
  )
}

export default About