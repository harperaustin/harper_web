import React, { useState, useEffect } from "react";

const images = [
  "images/pface1.png",
  "images/pface2.png",
  "images/pface3.png",
  "images/pface4.png",
  "images/pface5.png",
  "images/pface6.png",
  "images/pface7.png",
  "images/pface8.png",
  "images/pface9.png",
  "images/pface10.png",
  "images/pface11.png",
  "images/pface12.png",
  "images/pface13.png",
];

const ImageCycler: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10); // Change every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ marginLeft: "20px" }}>
      <img
        src={images[currentIndex]}
        alt={`Cycling image ${currentIndex}`}
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
    </div>
  );
};

export default ImageCycler;
