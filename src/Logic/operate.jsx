import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const one = Big(numberOne);
  const two = Big(numberTwo);

  switch (operation) {
    case '+':
      return one.plus(two).toString();
    case '-':
      return one.minus(two).toString();
    case 'x':
      return one.times(two).toString();
    case '÷':
      if (two.eq(0)) return "Cannot divide by 0";
      return one.div(two).toString();
    case '%':
      return one.mod(two).toString();
    default:
      return '0';
  }
};

export default operate;
