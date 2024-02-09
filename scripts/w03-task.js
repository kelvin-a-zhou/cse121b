/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Fkunction Definition - Add Numbers */

function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let number1 = Number(document.querySelector('#add1').value);
  let number2 = Number(document.querySelector('#add2').value);
  
  let sum = add(number1, number2);

  document.querySelector('#sum').value = sum;
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function  subtract(number1, number2) {
  return number1 - number2;
}
function subtractNumbers() {
  let number1 = Number(document.querySelector('#subtract1').value);
  let number2 = Number(document.querySelector('#subtract2').value);


  document.querySelector('#difference').value = subtract(number1, number2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
  



/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) =>  number1 * number2; 

let multiplyNumbers = () => {
  let number1 = Number(document.querySelector('#factor1').value);
  let number2 = Number(document.querySelector('#factor2').value);


  document.querySelector('#product').value = multiply(number1, number2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
  



/* Open Function Use - Divide Numbers */
function  divide(number1, number2) {
  return number1 / number2;
}
function  divideNumbers() {
  let number1 = Number(document.querySelector('#dividend').value);
  let number2 = Number(document.querySelector('#divisor').value);


  document.querySelector('#quotient').value = divide(number1, number2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

function getTotal(){
  let subTotal = parseFloat(document.querySelector('#subtotal').value);
  let hasMemberClickedCheckBox = document.querySelector('#member'); // true (any number other than 0)or false (0)
  
  if (hasMemberClickedCheckBox.checked){
      subTotal -= subTotal*0.2; 
      
  }

  subTotal = subTotal.toFixed(2);

  document.querySelector('#total').textContent = '$' + subTotal;
  
}

document.querySelector('#getTotal').addEventListener('click',getTotal)



/* ARRAY METHODS - Functional Programming */
let numbers = [ 1,2,3,4,5,6,7,8,9,10,11,12,13];


/* Output Source Array */
document.querySelector('#array').textContent = numbers;
/* Output Odds Only Array */
let oddNumbers = numbers.filter(number  => number % 2 !==0);
document.querySelector('#odds').textContent = oddNumbers;
/* Output Evens Only Array */
let evenNumbers = numbers.filter(number  => number % 2 ===0);
document.querySelector('#evens').textContent = evenNumbers;
/* Output Sum of Org. Array */
let sumOfArray = numbers.reduce((total, currentNumber) => total + currentNumber, 0);
document.querySelector('#sumOfArray').innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */
let multiplied = numbers.map(number => number * 2);
document.querySelector('#multiplied').textContent = multiplied;
/* Output Sum of Multiplied by 2 Array */
let sumOfMultipliedValues = multiplied.reduce((total, currentNumber) => total + currentNumber, 0);

document.getElementById('sumOfMultiplied').textContent = sumOfMultipliedValues;