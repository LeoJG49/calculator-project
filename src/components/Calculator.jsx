import React from 'react'
import { Delete, Percent, Calculator } from "lucide-react"
import { useState } from 'react'
import { evaluate } from 'mathjs' //With this we can mathematic operations
import Button from "./Button.jsx"
import Display from "./Display.jsx"
import "../stylesheets/calculator.css"
import ButtonClear from './ButtonClear.jsx'

function FunctionalCalculator() {

    const [value, setValue] = useState("");

    const handleValue = btnValue => {
        setValue(value + btnValue);
    };

    const calculatedResult = () => {
        if(value) {
            setValue(evaluate(value).toFixed(5))
        } else {
            alert("Please, insert a correct mathematical operation.")
        }
    }

    return (
        <div className="main-container">
            <Display value={value} />
        <div className="row">
            <Button handleClick={handleValue}><Delete size={20}></Delete></Button>
            <ButtonClear handleClear={() => setValue('')}>AC</ButtonClear>
            <Button handleClick={handleValue}><Percent size={20}></Percent></Button>
            <Button handleClick={handleValue}>/</Button>
        </div>
        <div className="row">
            <Button handleClick={handleValue}>7</Button>
            <Button handleClick={handleValue}>8</Button>
            <Button handleClick={handleValue}>9</Button>
            <Button handleClick={handleValue}>*</Button>
        </div>
        <div className="row">
            <Button handleClick={handleValue}>4</Button>
            <Button handleClick={handleValue}>5</Button>
            <Button handleClick={handleValue}>6</Button>
            <Button handleClick={handleValue}>-</Button>
        </div>
        <div className="row">
            <Button handleClick={handleValue}>1</Button>
            <Button handleClick={handleValue}>2</Button>
            <Button handleClick={handleValue}>3</Button>
            <Button handleClick={handleValue}>+</Button>
        </div>
        <div className="row">
            <Button handleClick={handleValue}><Calculator size={20}></Calculator></Button>
            <Button handleClick={handleValue}>0</Button>
            <Button handleClick={handleValue}>.</Button>
            <Button handleClick={calculatedResult}>=</Button>
        </div>
        </div>
    )
}

export default FunctionalCalculator
