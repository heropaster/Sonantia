import React from 'react'

import './Accordions.css'
const Accordions = () => {
    return (
        <div className="accordion-container">
            <div className="accordion__item">
                <div className="accordion__item__header">
                    Что такое Sonantia?
                </div>
                <div className="accordion__item__body">
                    Sonantia - приложение, которое воспроизводит слова на английском языке и проверяет ваше понимание языка на звук.
                </div>
            </div>  
        </div>
    )
}
export default Accordions;