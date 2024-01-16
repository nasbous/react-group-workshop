import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    transform: translateX(100%);
  }
  50% {
    transform: translateY(0) ;
  }
  100% {
    transform: translateY(100%);
    transform: translateX(100%);
  }
`;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${slideUp} 2s ease-in-out forwards; /* Use forwards to keep the styles of the last keyframe after animation */
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ImageSlider = ({ imageUrl }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAnimationEnd = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <Container onAnimationEnd={handleAnimationEnd}>
          <Image src={imageUrl} />
        </Container>
      )}
    </>
  );
};

export default ImageSlider;

