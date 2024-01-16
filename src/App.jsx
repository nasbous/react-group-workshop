import React, { useState, useEffect } from 'react';
import ImageSlider from './ImageSlider';
import audioFile from './assets/toasty_tfCWsU6.mp3';

const App = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [audio] = useState(new Audio(audioFile));

  const handleButtonClick = () => {
    setShowSlider(true);
    audio.play();
  };

  const handleAnimationEnd = () => {
    setTimeout(() => {
      setShowSlider(false);
    }, 1000); 
  };

  useEffect(() => {
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  return (
    <div>
      <button onClick={handleButtonClick} >
        TOASTY !!
      </button>
      {showSlider && (
        <ImageSlider
          imageUrl="./src/assets/pngwing.com.png"
          onAnimationEnd={handleAnimationEnd}
        />
      )}
    </div>
  );
};

export default App;