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
                {/* Идея создать кнопки: Что это за приложение и для чего оно? Как начать? Что ждет Sonantia в будущем? */}
                {/* Кнопки должны при клике показывать плавно появляющийся dropdown блок с текстом(На кнопках можно сделать или плюс или стрелочку, это неважно) */}
                
            </div>
        </nav>
    )
}
export default About