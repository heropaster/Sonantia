import React from 'react';
import "./About.css"
const About = () => {
    const [isActive, setActive] = React.useState(true)
    function handleToggle() {
        setActive(!isActive)
    }
    return (
        <nav className="navigation">
                <div className={`navigation__item ${isActive ? "active": ""}`} onClick={handleToggle}>
                    <span className='navigation__line navigation__line_first'></span>
                    <span className='navigation__line navigation__line_second'></span>
                    <span className='navigation__line navigation__line_third'></span>
                </div>
            <div className={`aboutBg ${isActive ? "active": ""}`}>
                <h2 className='about__title'>Welcome to <br /><span className='important'>Sonantia</span></h2>
            </div>
        </nav>
    )
}
export default About