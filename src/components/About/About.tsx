import React, { useState } from 'react';
import "./About.css"
const About = () => {
    const [isActive, setActive] = React.useState(false)
    function handleToggle() {
        setActive(!isActive)
    }
    return (
        <nav className="navigation">
                <div className={`navigation__item ${isActive ? "active": null}`} onClick={handleToggle}>
                    <span className='navigation__line navigation__line_first'></span>
                    <span className='navigation__line navigation__line_second'></span>
                    <span className='navigation__line navigation__line_third'></span>
                </div>
            <div className={`aboutBg ${isActive ? "active": null}`}></div>
        </nav>
    )
}
export default About;