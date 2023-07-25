import React from 'react'

import './Accordions.css'
const Accordions = () => {
    function showContent(target: HTMLElement) {
        target.classList.toggle('active');
        let targetContent = target.nextElementSibling!
        targetContent.classList.toggle('showed')
    }
    return (
        <div className="accordion-container">
            <div className="accordion__item">
                <div className="accordion__item__header" onClick={(event: any) => {
                    showContent(event.target)
                }}>
                    Что такое <span className="blue">Sonantia</span> ?
                </div>
                <div className="accordion__item__body">
                    <span className="blue">Sonantia</span> - приложение, которое воспроизводит слова на английском языке и проверяет ваше понимание языка на звук.
                </div>
            </div>  
        </div>
    )
}
export default Accordions;