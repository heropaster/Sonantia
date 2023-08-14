import React from 'react'
import Accordion from './Accordion'
import './Accordions.css'
const Accordions = () => {
    
    return (
        <div className="accordion-container">
             <Accordion info={{
                header: 'Что такое',
                mainname: 'Sonantia',
                desc: ' - это приложение, которое воспроизводит английские слова и проверяет ваше восприятие звука'
             }}/>
        </div>
    )
}
export default Accordions;