import React from 'react'

const Operations = props => {
  const handleClick = event => {
    props.onClick(event.target.value)
  }
  const handleEqualsClick = () => {
    props.onEqualsClick()
  }
  return (
    <div className="operations subgrid">
        <button onClick={handleClick} value="+">
          +
        </button>
        <button onClick={handleClick} value="-">
          -
        </button>
        <button onClick={handleClick} value="*">
          *
        </button>
        <button onClick={handleClick} value="/">
          /
        </button>
        <button onClick= {handleEqualsClick}
        value="="
        >
          =
        </button>
      </div>
  )
}

export default Operations
