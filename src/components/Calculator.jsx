import React, { useState } from 'react';
import Button from './Button';
import './Calculator.css';
import calculate from '../Logic/calculate';

function Calculator() {
  const [calculator, setCalculator] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const buttons = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
  ];

  const handleClick = (buttonName) => {
    const newState = calculate(calculator, buttonName);
    setCalculator(newState);
  };

  const { total, next } = calculator;

  return (
    <div className="calculator">
      <div className="display">{next || total || '0'}</div>
      <div className="buttons">
        {buttons.map((btn) => (
          <Button key={btn} label={btn} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
