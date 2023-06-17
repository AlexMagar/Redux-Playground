import React from 'react'

export const Buttons = ({increase, decrease}) => {
  return (
    <div>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
    </div>
  )
}
