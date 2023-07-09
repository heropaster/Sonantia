import React from 'react'
import './Score.css'
const Score = (props: {completed: number}) => {
    const completed:number = props.completed;
    return (
        <div className='progress-container'>
            <div className='progress' style={completed >= 100 ? {width: 100 +`%`, padding: 3} : completed !== 0 ? { width: completed + `%`, padding: 3}: {width: 0, padding: 0}}>
                <span className='progress_value' >{completed >= 100 ? "100%" : completed !== 0 ? `${completed}%`:''}</span>
            </div>
        </div>
    )
}
export default Score