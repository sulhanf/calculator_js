const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
  console.log(number)
  number.addEventListener("click", () => {
    console.log("number is pressed");
    console.log(event.target.value);
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
  calculatorScreen.value = number;
}

let prevNumber = "";
let calculationOperator = '';
let currentNumber = '0';
let done_flag = false;

const inputNumber = (number) => {
  if (currentNumber === '0' || done_flag) {
    currentNumber = number;
    done_flag = false;
  } else {
    done_flag = false;
    currentNumber += number;
  }
}

const inputOperator = (operator) => {
  if (calculationOperator === '') {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = '0';
}

const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
  console.log(operator);
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
  console.log('equal button is pressed');
  calculate();
  updateScreen(currentNumber);
});

let hundred = "100";

const calculate = () => {
  let result = '';
  switch (calculationOperator) {
    case "=":
      console.log("=");
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      console.log("-");
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "+":
      console.log("+");
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "*":
      console.log("*");
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      console.log("/");
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    case "%":
      console.log("%");
      result = parseFloat(prevNumber) / parseFloat(hundred);
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = '';
  done_flag = true;
}

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
  console.log('AC button is pressed');
  clearAll();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = '';
  calculationOperator = '';
  currentNumber = '0';
}

const inputDecimal = (dot) => {
  if (currentNumber.includes('.')) {
    return;
  } else {
    currentNumber += dot;
  }
}

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
  console.log(event.target.value);
  inputDecimal(event.target.value);
});