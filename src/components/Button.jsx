import '../stylesheets/buttons.css'

const Button = (props) => {

    const isOperator = value => {
        return isNaN(value);
    }

    return (
        <button className={`calc-button ${isOperator(props.children) ? "operator" : "number"}`.trimEnd()}
            onClick={() => props.handleClick(props.children)}
        >
            {props.children}
        </button>
    )
}

export default Button
