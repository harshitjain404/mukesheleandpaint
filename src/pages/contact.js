import React, { useState } from "react";
import "./contact.css";
import ContactForm from  "../components/contact-form.js";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      
   <ContactForm/>
        {/* Google Maps Section */}
        <div className="contact-map">
          <iframe
            title="Mukesh Paints & Elec Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.972973616396!2d77.68623151501194!3d28.71968029100817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbf4dd3e7b69%3A0x3a8d2c4e2b9f4b66!2sMukesh%20Paints%20%26%20Elec!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
          <a
            href="https://maps.app.goo.gl/bxSoduPUsiQq1D1w8"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            Open in Google Maps
          </a>
        </div>
   
    </div>
  );
};

export default Contact;
