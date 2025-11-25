import React from 'react';

function Button({ label, onClick }) {
  return (
    <button className="calculator-button" onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

export default Button;
