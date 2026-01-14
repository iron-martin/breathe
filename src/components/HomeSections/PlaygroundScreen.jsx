import React from 'react';
import './PlaygroundScreen.css';

export const PlaygroundScreen = () => {
  const researchItems = [ 
    {
      id: 1,
      title: 'RESEARCH',
      subtitle: 'the how',
      description: 'Stuff that has been read over and over in order to make this possible as it is.',
      link: '/research',
    },
    {
      id: 2,
      title: 'CONTACT',
      subtitle: 'the who',
      description: 'The person behind this would love to know your experience with Breathe.',
      link: '/about',
    },
    {
      id: 3,
      title: 'READ',
      subtitle: 'the story',
      description: 'Jennifer! Read the story, please, read the story. Do you know what happens next?',
      link: '/book',
    }
  ];

  const handleLinkClick = (link) => {
    console.log(`Navegando a: ${link}`);
  };

  return (
    <div className="playground-screen"> 
      <div className="playground-background"></div>
      
      
      <div className="playground-content"> 
        <div className="playground-header"> 
          <h2 className="section-title">you curious?</h2>
          <p className="section-subtitle">
            lucky you!
          </p>
        </div>
        
        <div className="playground-grid"> 
          {researchItems.map((item) => (
            <div 
              key={item.id} 
              className="playground-card" 
              onClick={() => handleLinkClick(item.link)}
            >
              <div className="card-content">
                <div className="card-header">
                  <h3 className="card-title">{item.title}</h3>
                  <div className="card-subtitle">{item.subtitle}</div>
                </div>
                
                <p className="card-description">{item.description}</p>
                
                <div className="card-link">
                  <span className="link-text"> COME ON ▶</span>
                  <div className="link-underline"></div>
                </div>
              </div>
              
              <div className="card-hover-effect"></div>
            </div>
          ))}
        </div>
        
        <div className="playground-footer"> 
          <p className="footer-text">
            Thank you for being here.
          </p>
        </div>
      </div>
    </div>
  );
};