import React from 'react'
import { useState } from 'react'
import { buttons } from "../data/buttonsData.js"
import Button from "./Button.jsx"
import Display from "./Display.jsx"
import "../stylesheets/calculator.css"

function Calculator() {

    const [value, setValue] = useState(0);

    const handleClick = (btnValue) => {
        console.log(btnValue);
    };

    return (
        <div className="main-container">
            <Display value={value} />

            {buttons.map((row, rowIndex) => (
                <div className="row" key={rowIndex}>
                    {row.map((btn, index) => (
                        <Button
                            key={index}
                            onClick={() => handleClick(btn.value)}
                        >
                            {btn.type === "icon" ? btn.icon : btn.value}
                        </Button>
                    ))}
                </div>
            ))}
        </div>

    )
}

export default Calculator
