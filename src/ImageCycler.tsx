import React, { useState, useEffect } from "react";

// const images = [
//   "images/pixface1.png",
//   "images/pixface2.png",
//   "images/pixface3.png",
//   "images/pixface4.png",
//   "images/pixface5.png",
//   "images/pixface6.png",
//   "images/pixface5.png",
//   "images/pixface4.png",
//   "images/pixface3.png",
//   "images/pixface2.png",
//   "images/pixface1.png",

//   "images/pixface12.png",
//   "images/pixface11.png",
//   "images/pixface10.png",
//   "images/pixface9.png",
//   "images/pixface8.png",
//   "images/pixface7.png",
//   "images/pixface8.png",
//   "images/pixface9.png",
//   "images/pixface10.png",
//   "images/pixface11.png",
//   "images/pixface12.png",
// ];

const images = [
  "images/hs_2.png",
  "images/hs_2.png",
  "images/hs_3.png",
  "images/hs_4.png",
  "images/hs_5.png",
  "images/hs_6.png",
  "images/hs_7.png",
  "images/hs_6.png",
  "images/hs_7.png",
  "images/hs_6.png",
  "images/hs_5.png",
  "images/hs_4.png",
  "images/hs_3.png",
  "images/hs_2.png",
  "images/hs_2.png",
  "images/hs_2.png",
  "images/hs_2.png",
  "images/hs_2.png",
  "images/hs_2.png",
  "images/hs_2.png",
  "images/hs_2.png",
  "images/hs_2.png",
];

const ImageCycler: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 125);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ marginLeft: "20px" }}>
      <img
        src={images[currentIndex]}
        alt={`Cycling image ${currentIndex}`}
        style={{
          width: "300px",
          height: "300px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
    </div>
  );
};

export default ImageCycler;
