import React from 'react';
import Button from './Button';
import './Calculator.css';

function Calculator() {
  const buttons = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
  ];

  return (
    <div className="calculator">
      <div className="display">0</div>
      <div className="buttons">
        {buttons.map((btn) => (
          <Button key={btn} label={btn} />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
