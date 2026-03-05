import '../stylesheets/buttonsClear.css'

export default function ButtonClear(props) {
  return (
    <div className='button-clear'
      onClick={() => props.handleClear(props.children)}
    >
      {props.children}
    </div>
  )
}
