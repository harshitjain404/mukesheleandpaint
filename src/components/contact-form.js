// import React, { useState } from "react";
// import "./contactform.css";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     company: "",
//     category: "",
//     product: "",
//     message: "",
//     file: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, file: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//   };

//   return (
//     <div className="contact-form-container ">
      
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <br/>
//         <input
//           type="text"
//           name="contact"
//           placeholder="Contact"
//           value={formData.contact}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         /> <br/>
//         <input
//           type="text"
//           name="company"
//           placeholder="Company Name"
//           value={formData.company}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />
//         <br/>
//         <select
//           name="category"
//           value={formData.category}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         >
//           <option value="">Select Enquiry Category</option>
//           <option value="Paints">Paints</option>
//           <option value="Electrical">Electrical</option>
//           <option value="Tools">Tools</option>
//           <option value="Other">Other</option>
//         </select> <br/>
//         <select
//           name="product"
//           value={formData.product}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         >
//           <option value="">Select Product</option>
//           <option value="Asian Paints">Asian Paints</option>
//           <option value="Dr. Fixit">Dr. Fixit</option>
//           <option value="Wilmar">Wilmar</option>
//           <option value="Other">Other</option>
//         </select> <br/>
//         <textarea
//           name="message"
//           placeholder="Message"
//           value={formData.message}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           rows="4"
//         ></textarea> <br/>

//         <input
//           type="file"
//           accept=".pdf,.doc,.docx,.xls,.xlsx"
//           onChange={handleFileChange}
//           className="w-full p-2 border rounded"
//         />
//         <br/>
//         <button
//           type="submit"
//           className="contact-form-button"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import "./contactform.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    company: "",
    category: "",
    product: "",
    message: "",
    file: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedExtensions = ["pdf", "doc", "docx", "xls", "xlsx"];
      const fileExtension = file.name.split(".").pop().toLowerCase();

      if (!allowedExtensions.includes(fileExtension)) {
        setErrors({ ...errors, file: "Invalid file type" });
      } else {
        setErrors({ ...errors, file: "" });
        setFormData({ ...formData, file });
      }
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.contact) newErrors.contact = "Contact number is required";
    else if (!/^\d{10}$/.test(formData.contact))
      newErrors.contact = "Enter a valid 10-digit number";

    if (!formData.category) newErrors.category = "Please select a category";
    if (!formData.product) newErrors.product = "Please select a product";
    if (!formData.message) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted Successfully", formData);
      alert("Thank you! Your message has been sent.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 border border-gray-200 contact-form-container">
      <h2 className="text-4xl font-bold text-green-700 mb-6 text-center">Contact Us</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="peer w-full border border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            placeholder=" "
          />
          <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-green-600">
            Full Name
          </label>
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Contact */}
        <div className="relative">
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="peer w-full border border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            placeholder=" "
          />
          <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-green-600">
            Contact Number
          </label>
          {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
        </div>

        {/* Company Name */}
        <div className="relative">
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="peer w-full border border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            placeholder=" "
          />
          <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-green-600">
            Company Name (Optional)
          </label>
        </div>

        {/* Dropdowns */}
        <div className="grid grid-cols-2 gap-4">
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-green-500 transition"
          >
            <option value="">Select Enquiry Category</option>
            <option value="Paints">Paints</option>
            <option value="Electricals">Electricals</option>
            <option value="Waterproofing">Waterproofing</option>
            <option value="Tools & Equipment">Tools & Equipment</option>
          </select>

          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-green-500 transition"
          >
            <option value="">Select a Product</option>
            <option value="Asian Paints">Asian Paints</option>
            <option value="Dr. Fixit">Dr. Fixit</option>
            <option value="Wilmar">Wilmar</option>
            <option value="Electrical Fittings">Electrical Fittings</option>
          </select>
        </div>

        {/* Message Box */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-green-500 transition"
          placeholder="Your Message..."
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

        {/* File Upload */}
        <div className="flex items-center space-x-2">
          <label className="cursor-pointer flex items-center space-x-2 bg-gray-100 p-3 rounded-lg border border-gray-300 hover:bg-gray-200 transition">
            <FaCloudUploadAlt className="text-green-600 text-2xl" />
            <span className="text-gray-600">Upload File</span>
            <input type="file" className="hidden" onChange={handleFileChange} />
          </label>
          {errors.file && <p className="text-red-500 text-sm">{errors.file}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-700 text-white py-3 px-4 rounded-lg hover:bg-green-800 transition font-semibold shadow-lg"
          
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
