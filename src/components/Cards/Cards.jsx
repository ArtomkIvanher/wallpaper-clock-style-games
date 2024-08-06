import React, { useState, useEffect } from 'react';
import './Cards.scss';

const totalCards = 10 * 6; // Загальна кількість карток

const getRandomImages = (images, count) => {
  console.log("Total images available: ", images.length);
  let shuffled = [...images].sort(() => 0.5 - Math.random());
  while (shuffled.length < count) {
    shuffled = shuffled.concat(shuffled.slice(0, count - shuffled.length));
  }
  console.log("Shuffled images: ", shuffled);
  return shuffled.slice(0, count);
};

const Cards = () => {
  const [images, setImages] = useState([]);
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    // Завантаження JSON файлу
    fetch('/images.json')
      .then((response) => response.json())
      .then((data) => {
        console.log("Images data from JSON: ", data.images);
        setAllImages(data.images); // Витягування масиву зображень з об'єкта
        const randomImages = getRandomImages(data.images, totalCards);
        console.log("Random images: ", randomImages);
        setImages(randomImages);
      })
      .catch((error) => {
        console.error('Error loading images:', error);
      });
  }, []);

  useEffect(() => {
    console.log("Updated images state: ", images);
  }, [images]);

  const rows = [];
  for (let i = 0; i < 6; i++) {
    const row = images.slice(i * 10, (i + 1) * 10);
    console.log(`Row ${i}: `, row);
    rows.push(row);
  }

  console.log("Rows: ", rows);

  return (
    <div className="cards-wrapper">
      <div className="cards-container">
        {rows.map((row, rowIndex) => (
          <div className={`cards-row cards-row-${rowIndex}`} key={rowIndex}>
            {row.length > 0 && row.map((image, index) => (
              <div className="card" key={`${rowIndex}-${index}`}>
                <img src={image} alt={`Random ${rowIndex}-${index}`} />
              </div>
            ))}
            {/* Дублікація ряду для анімації */}
            {row.length > 0 && row.map((image, index) => (
              <div className="card" key={`duplicate-${rowIndex}-${index}`}>
                <img src={image} alt={`Duplicate ${rowIndex}-${index}`} />
              </div>
            ))}
            {row.length > 0 && row.map((image, index) => (
              <div className="card" key={`duplicate2-${rowIndex}-${index}`}>
                <img src={image} alt={`Duplicate2 ${rowIndex}-${index}`} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
