// import React from 'react';
// import './footer.css';
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import Socialmedia from './socialmedia';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         {/* Shop Name */}
//         <div className="footer-brand">
//           <h2>Mukesh Paints &amp; Elec</h2>
//           <p>Shop No 4, Shridhar Co Operative Housing Society, Hanuman Road, Vile Parle East, Mumbai - 400057 (Opposite ICICI Bank)</p>
//           <p>Phone: +1 (234) 567-890</p>
//         </div>

//         {/* Social Media Icons
//         <div className="footer-social">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//           <FaFacebook size={30} />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//           <FaTwitter size={30} />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//           <FaInstagram size={30}/>
//           </a>
//         </div> */}

//         <Socialmedia />

//       </div>
//       <div className="footer-bottom">
//         <p>&copy; {new Date().getFullYear()} Mukesh Paints &amp; Elec. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import './footer.css';
import { 
  FaWhatsapp, 
  FaFacebookF, 
  FaStoreAlt, 
  FaPhoneAlt, 
  FaInstagram 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <h2>Mukesh Paints &amp; Elec</h2>
        <p>No 1, Shridhar CHS , Hanuman rd , Vile Parle (e) , Mmbai Maharashtra 400-057</p>
        <p>Phone: +91 99206 84385</p>
      </div>

      <div className="footer-social">
        <div className="social-icon">
          <a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icon" />
          </a>
          <span className="social-label">WhatsApp</span>
        </div>

        <div className="social-icon">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="icon" />
          </a>
          <span className="social-label">Facebook</span>
        </div>

        <div className="social-icon">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <span className="social-label">Instagram</span>
        </div>

        <div className="social-icon">
          <a href="https://www.indiamart.com" target="_blank" rel="noopener noreferrer">
            <FaStoreAlt className="icon" />
          </a>
          <span className="social-label">Indiamart</span>
        </div>

        <div className="social-icon">
          <a href="https://www.justdial.com" target="_blank" rel="noopener noreferrer">
            <FaPhoneAlt className="icon" />
          </a>
          <span className="social-label">Justdial</span>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mukesh Paints &amp; Elec. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
