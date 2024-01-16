import React, { useState } from 'react';
import './JumpingEmoji.css';

const JumpingEmoji = () => {
  const [isJumping, setIsJumping] = useState(false);
  const [jumpCount, setJumpCount] = useState(0);

  const handleJump = () => {
    setIsJumping(true);
    setJumpCount(jumpCount + 1);

    setTimeout(() => {
      setIsJumping(false);
    }, 1000);
  };

  return (
    <div className={`emoji-container ${isJumping ? 'jumping' : ''}`} onClick={handleJump}>
      🚀 {jumpCount > 0 && <span className="jump-count">Jumps: {jumpCount}</span>}
    </div>
  );
};

export default JumpingEmoji;
