import React from 'react'
import '../styles/Button.css'

function Button({textBtn, classBtn, functionBtn}){
    return (
        <button
            className= {classBtn ? 'click-button' : 'reset-button'}
            onClick={functionBtn}>
            {textBtn}
        </button>
    )
}

export default Button;