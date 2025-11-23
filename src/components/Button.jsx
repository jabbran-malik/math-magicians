import React from 'react'

function Button({label , onclick}) {
  return (
    <button className="calculator-button" onclick={onclick}>{label}</button>
  )
}

export default Button;