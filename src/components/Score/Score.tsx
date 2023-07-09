import React from 'react'
import './Score.css'
const Score = (props: {completed: number}) => {
    const completed:number = props.completed;
    return (
        <div className='progress-container'>
            <div className='progress' style={completed !== 0 ? { width: completed + `%`, padding: 3}: {width: 0, padding: 0}}>
                <span className='progress_value' >{completed !== 0 ? `${completed}`:''}</span>
            </div>
        </div>
    )
}
export default Score