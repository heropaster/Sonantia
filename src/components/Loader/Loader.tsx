import React from 'react';
import './Loader.css'
const Loader = () => {
    // var scene = document.querySelector('.loader__scene');
    // var cube = document.querySelector('.cube');
    // var originX = 50;
    // var originY = 50;

    // function updatePerspectiveOrigin() {
    // scene.style.perspectiveOrigin = originX + '% ' + originY + '%';
    // }
    return (
        <div className="loader">
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