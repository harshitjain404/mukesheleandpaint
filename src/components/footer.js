import React from 'react';
import './footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Shop Name */}
        <div className="footer-brand">
          <h2>Mukesh Paints &amp; Elec</h2>
          <p>Shop No 4, Shridhar Co Operative Housing Society, Hanuman Road, Vile Parle East, Mumbai - 400057 (Opposite ICICI Bank)</p>
          <p>Phone: +1 (234) 567-890</p>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30}/>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mukesh Paints &amp; Elec. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
