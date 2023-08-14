import React from 'react'

import './Accordions.css'
const Accordions = () => {
    function showContent(target: HTMLElement) {
        if (target.classList.contains('blue')) return
        target.classList.toggle('active');
        let targetContent = target.nextElementSibling!
        targetContent.classList.toggle('showed')
    }
    return (
        <div className="accordion-container">
            <div className="accordion__item">
                <div className="accordion__item__header" onClick={(event: any) => {
                    if (event.target.classList.contains('blue')) {
                        console.log(event.target.parentNode)
                        showContent(event.target.parentNode)
                    }
                    showContent(event.target)
                }}>
                    Что такое <span className="blue">Sonantia</span> ?
                </div>
                <div className="accordion__item__body">
                    <span className="blue">Sonantia</span> - это приложение, которое воспроизводит английские слова и проверяет ваше восприятие звука
                </div>
            </div>  
        </div>
    )
}
export default Accordions;