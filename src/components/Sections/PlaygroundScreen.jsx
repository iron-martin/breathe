import React from 'react';
import './PlaygroundScreen.css';

export const PlaygroundScreen = () => {
  const researchItems = [  // <-- Añadí el nombre "researchItems" aquí
    {
      id: 1,
      title: 'RESEARCH',
      subtitle: 'Explore the philosophical foundations',
      description: 'Deep dive into the virtues, their history, and psychological impact.',
      link: '/research',
      color: '#3498db'
    },
    {
      id: 2,
      title: 'ABOUT',
      subtitle: 'The creation journey',
      description: 'Learn about the development process, team, and inspiration behind Breathe.',
      link: '/about',
      color: '#2ecc71'
    },
    {
      id: 3,
      title: 'BOOK',
      subtitle: 'Extended universe',
      description: 'Discover the companion book exploring each virtue in depth with artwork.',
      link: '/book',
      color: '#9b59b6'
    }
  ];

  const handleLinkClick = (link) => {
    // Eventualmente navegar a la página correspondiente
    console.log(`Navegando a: ${link}`);
  };

  return (
    <div className="playground-screen"> {/* Cambié el nombre de la clase */}
      {/* Fondo borroso */}
      <div className="playground-background"></div> {/* Cambié el nombre de la clase */}
      
      {/* Contenido */}
      <div className="playground-content"> {/* Cambié el nombre de la clase */}
        <div className="playground-header"> {/* Cambié el nombre de la clase */}
          <h2 className="section-title">DEEPER EXPLORATION</h2>
          <p className="section-subtitle">
            Continue your journey beyond the game
          </p>
        </div>
        
        <div className="playground-grid"> {/* Cambié el nombre de la clase */}
          {researchItems.map((item) => (
            <div 
              key={item.id} 
              className="playground-card" /* Cambié el nombre de la clase */
              onClick={() => handleLinkClick(item.link)}
            >
              <div className="card-content">
                <div className="card-header">
                  <h3 className="card-title">{item.title}</h3>
                  <div className="card-subtitle">{item.subtitle}</div>
                </div>
                
                <p className="card-description">{item.description}</p>
                
                <div className="card-link">
                  <span className="link-text">EXPLORE →</span>
                  <div className="link-underline"></div>
                </div>
              </div>
              
              <div className="card-hover-effect"></div>
            </div>
          ))}
        </div>
        
        {/* Footer */}
        <div className="playground-footer"> {/* Cambié el nombre de la clase */}
          <p className="footer-text">
            "True understanding comes from persistent exploration"
          </p>
          <div className="footer-line"></div>
        </div>
      </div>
    </div>
  );
};