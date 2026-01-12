import React, { useState, useEffect } from 'react';
import './VirtueSlider.css';

const virtuesData = [
  {
    id: 1,
    name: 'COURAGE',
    definition: 'The mental or moral strength to venture, persevere, and withstand danger, fear, or difficulty.',
    latin: 'Fortitudo',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800',
  },
  {
    id: 2,
    name: 'JUSTICE',
    definition: 'The quality of being fair and reasonable in judgment and action.',
    latin: 'Iustitia',
    image: 'https://images.unsplash.com/photo-1585506936724-cb4d72f219b5?auto=format&fit=crop&w=800',
  },
  {
    id: 3,
    name: 'PATIENCE',
    definition: 'The capacity to accept or tolerate delay, trouble, or suffering without getting angry or upset.',
    latin: 'Patientia',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800',
  },
  {
    id: 4,
    name: 'WISDOM',
    definition: 'The quality of having experience, knowledge, and good judgment.',
    latin: 'Sapientia',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800',
  },
  {
    id: 5,
    name: 'TEMPERANCE',
    definition: 'Moderation or self-restraint in action, thought, or feeling.',
    latin: 'Temperantia',
    image: 'https://images.unsplash.com/photo-1536152471326-642d7bb4eb1f?auto=format&fit=crop&w=800',
  },

];

// Array de colores para cada virtud
const virtueColors = ['#FF6B35', '#1E88E5', '#4CAF50', '#FFC107', '#9C27B0'];

export const VirtueSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentVirtue = virtuesData[currentSlide];
  const currentColor = virtueColors[currentSlide];

  // Actualizar CSS variables cuando cambia la slide
  useEffect(() => {
    document.documentElement.style.setProperty('--current-color', currentColor);
    document.documentElement.style.setProperty('--current-image', `url(${currentVirtue.image})`);
  }, [currentSlide, currentVirtue, currentColor]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % virtuesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + virtuesData.length) % virtuesData.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="virtue-slider mt-0">
      <div className="slider-container row">
        {/* Columna izquierda - Información */}
        <div className="definition-column col-7">
          <div className="virtue-header">
            <h2 className="virtue-name" style={{ color: currentColor }}>
              {currentVirtue.name}
            </h2>
            <span
              className="virtue-latin"
              style={{ color: currentColor }}
            >
              {currentVirtue.latin}
            </span>
          </div>

          <div className="definition-content">
            <p className="definition-text">{currentVirtue.definition}</p>

            {/* Navegación del slider */}
            <div className="slider-navigation">
              <button className="nav-btn prev-btn" onClick={prevSlide}>
                ←
              </button>

              <div className="slide-dots">
                {virtuesData.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    style={{
                      backgroundColor: index === currentSlide ? currentColor : '#ccc'
                    }}
                  />
                ))}
              </div>

              <button className="nav-btn next-btn" onClick={nextSlide}>
                →
              </button>
            </div>
          </div>

        </div>


      </div>
      {/* Columna derecha - Imagen nítida */}
      <div className="image-column col-5">
        <div className="virtue-image-container">
          <div className="virtue-image">
            <img
              src={currentVirtue.image}
              alt={currentVirtue.name}
              className="virtue-image-img"
            />
          </div>

        </div>
      </div>
    </div>
  );
};