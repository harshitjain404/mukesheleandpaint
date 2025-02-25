// import React, { useState, useEffect } from "react";
// import "./slider.css";

// const Slider = ({ slides = [] }) => {
//   // Now slides is always an array, even if not passed
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <div className="slider">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`slide ${index === currentIndex ? "active" : ""}`}
//           style={{ backgroundImage: `url(${slide.image})` }}
//         >
//           <div className="slide-overlay">
//             <h2>hiii{slide.title}</h2>
//             <p>{slide.description}</p>
//           </div>
//         </div>
//       ))}
//       <div className="dots">
//         {slides.map((_, index) => (
//           <span
//             key={index}
//             className={`dot ${index === currentIndex ? "active" : ""}`}
//             onClick={() => setCurrentIndex(index)}
//           >hii</span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;


import React, { useState, useEffect } from "react";
import "./slider.css";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-overlay">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
