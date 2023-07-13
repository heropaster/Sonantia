import React, { useState } from 'react';
import './Loader.css'
const Loader = () => {
    const [className, setClassName] = useState('visible');
    setTimeout(() => {
        setClassName('hidden')
    }, 6500);
    return (
        <div className={`loader ${className}`}>
            <div className="loader__scene">
                <div className="cube">
                    <div className="cube__face cube__face--front">sonantia</div>
                    <div className="cube__face cube__face--back">sonantia</div>
                    <div className="cube__face cube__face--right">sonantia</div>
                    <div className="cube__face cube__face--left">sonantia</div>
                    <div className="cube__face cube__face--top">sonantia</div>
                    <div className="cube__face cube__face--bottom">sonantia</div>
                </div>
            </div>
        </div>
    )
}
export default Loader