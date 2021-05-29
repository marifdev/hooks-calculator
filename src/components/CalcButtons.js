import React from 'react'

const CalcButtons = (props) => {
  const calcBtns = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach((item) => {
    calcBtns.push(
      <button
        onClick={(e) => {
          props.onClick(e.target.value)
        }}
        value={item}
        key={item}
      >
        {item}
      </button>
    );
  });
  return (
    <div className="digits flex">{calcBtns}</div>
  )
}

export default CalcButtons
