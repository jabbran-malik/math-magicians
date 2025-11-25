import operate from './operate';

const calculate = (calculator, buttonName) => {
  let { total, next, operation } = calculator;

  // Reset calculator
  if (buttonName === 'AC') {
    return { total: null, next: null, operation: null };
  }

  // Operations (+, -, x, ÷, %)
  if (['+', '-', 'x', '÷', '%'].includes(buttonName)) {
    if (next) {
      return { total: next, next: null, operation: buttonName };
    }
    return { ...calculator, operation: buttonName };
  }

  // Equals button
  if (buttonName === '=') {
    if (next && operation) {
      const result = operate(total, next, operation);
      return { total: result, next: null, operation: null };
    }
    return calculator;
  }
if (buttonName === '+/-') {
  if (next) {
    next = (-1 * parseFloat(next)).toString();
  } else if (total) {
    total = (-1 * parseFloat(total)).toString();
  }
  return { total, next, operation };
}
  // Append number or dot
  if (next) {
    next += buttonName;
  } else {
    next = buttonName;
  }

  return { ...calculator, next };
};

export default calculate;
