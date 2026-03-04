import React from 'react'
import '../stylesheets/buttons.css'

const Button = ({ children, onClick }) => {

    const isOperator = value => {
        return isNaN(value);
    }

    return (
        <button className={`calc-button ${isOperator(children) ? "operator" : "number"}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
