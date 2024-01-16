import { useState } from 'react';
import './ConfettiComp.css'
import Confetti from 'react-confetti';

function ConfettiComp() {

    const [pressCount, setPressCount] = useState(0);
    const layers = Array.from({ length: pressCount }, (_, index) => ({
        width: window.width,
        height: window.height,
        numberOfPieces: 200,
        colors: ['#ff0000', '#00ff00', '#0000ff'],
        gravity: 0.5,
        recycle: false,
        key: index,
    }));

    const handleButtonClick = () => {
        setPressCount(pressCount => pressCount + 1);
    };

    return (
        <div className='card-active'>
            {layers.map(layer => (
                <Confetti key={layer.key} {...layer} />
            ))}
            <div onClick={handleButtonClick}>
                <div className="emoji-cont">😊</div>
                <div>Confetti demo</div>
            </div>
        </div>
    )
}

export default ConfettiComp;