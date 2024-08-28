import React, { useState, useEffect } from 'react';
import '../Styles/Carrusel.css';

function Carrusel() {
  const images = [
    require("../Images/Oferta1.jpeg"),
    require("../Images/Oferta2.jpeg"),
    require("../Images/Oferta3.jpeg"),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambiar imagen cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="carousel">
      <div className="carousel-item">
        <img src={images[currentIndex]} alt={`Promo ${currentIndex + 1}`} />
      </div>
    </section>
  );
}

export default Carrusel;
