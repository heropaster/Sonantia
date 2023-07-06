import React from 'react'

const Score = (props) => {
    const {background, completed} = props;
    const containerStyles = {
        height: 25,
        maxWidth: 576,
        background: '#f1dab8ad',
        borderRadius: 40,
        margin: 50
    };
    const fillerStyles = {
        boxSizing: 'border-box',
        height: 25,
        maxWidth: 576,
        width: `${completed}%`,
        backgroundColor: '#ff7f51',
        borderRadius: 40,
        textAlign: 'right',
        padding: 3
    }
    const labelStyles = {
        paddingTop: 3,
        color: '#fff'
    }
    
    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{completed!=0 ? `${completed}`: ''}</span>
            </div>
        </div>
    )
}
export default Score