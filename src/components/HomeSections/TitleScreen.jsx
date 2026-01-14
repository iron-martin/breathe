import './TitleScreen.css';

export const TitleScreen = () => {
  const handleTitleOptionClick = () => {
    // Eventualmente link a YouTube
    console.log('Ver trailer');
  };

  const handlePlayClick = () => {
    // Eventualmente link a página de compra
    console.log('Jugar ahora');
  };

  return (
    <div className="title-screen">
      <div className="game-background">
        
      </div>
      
      <div className="title-content">
        <div className="game-title-container">
          <h1 className="game-title">BREATHE</h1>
          
        </div>
        
        <div className="title-buttons">

          <button 
            className="play-btn" 
            onClick={handlePlayClick}
            title='This will someday take you to the download page.'
          >
            <span className="btn-text">Play</span>
            <span className="btn-icon">▲</span>
          </button>

          <button 
            className="media-btn" 
            onClick={handleTitleOptionClick}
            title='This will someday take you to the trailer.'
          >
            <span className="btn-text">Watch</span>
            <span className="btn-icon">▶</span>
          </button>

          <button 
            className="media-btn" 
            onClick={handleTitleOptionClick}
            title='This will someday take you to the library.'
          >
            <span className="btn-text">Read</span>
            <span className="btn-icon">▶</span>
          </button>
          
          
        </div>        
      </div>
    </div>
  );
};