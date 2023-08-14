import React from 'react'

const Accordion = ({ info }: { info: { header: string, mainname: string, desc: string} }) => {
    function showContent(target: HTMLElement) {
        if (target.classList.contains('blue')) return
        target.classList.toggle('active');
        let targetContent = target.nextElementSibling!
        targetContent.classList.toggle('showed')
    }
    return (
        <div className="accordion__item">
                <div className="accordion__item__header" onClick={(event: any) => {
                    if (event.target.classList.contains('blue')) {
                        showContent(event.target.parentNode)
                    }
                    showContent(event.target)
                }}>
                    {info.header} <span className="blue">{info.mainname}</span> ?
                </div>
                <div className="accordion__item__body">
                    <span className="blue">{info.mainname}</span>{info.desc}
                </div>
            </div>  
    )
}
export default Accordion