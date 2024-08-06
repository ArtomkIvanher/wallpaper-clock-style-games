import React, { useState, useEffect } from 'react';
import './Cards.scss';

const imageCount = 10; // Кількість зображень у папці
const totalCards = 10 * 5; // Загальна кількість карток
const allImages = Array.from({ length: imageCount }, (_, i) => `/images/img${i + 1}.jpg`);

const getRandomImages = (count) => {
  const images = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * allImages.length);
    images.push(allImages[randomIndex]);
  }
  return images;
};

const Cards = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(getRandomImages(totalCards));
  }, []);

  const rows = [];
  for (let i = 0; i < 5; i++) {
    rows.push(images.slice(i * 10, (i + 1) * 10));
  }

  return (
    <div className="cards-wrapper">
      <div className="cards-container">
        {rows.map((row, rowIndex) => (
          <div className="cards-row" key={rowIndex}>
            {row.map((image, index) => (
              <div className="card" key={index}>
                <img src={image} alt={`Random ${rowIndex}-${index}`} />
              </div>
            ))}
            {/* Дублікація ряду для анімації */}
            {row.map((image, index) => (
              <div className="card" key={`duplicate-${index}`}>
                <img src={image} alt={`Duplicate ${rowIndex}-${index}`} />
              </div>
            ))}
            {row.map((image, index) => (
              <div className="card" key={`duplicate-${index}`}>
                <img src={image} alt={`Duplicate ${rowIndex}-${index}`} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
