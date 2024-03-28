// 12-7 Integer float parseInt parseFloat type conversion


var numberOne = 20;
var numberTwo = '10.5';

//addition
console.log(numberOne + numberTwo);

//string to float number
numberTwo = parseFloat(numberTwo);
console.log(numberOne + numberTwo);

//string to Int number
numberTwo = parseInt(numberTwo);
console.log(numberOne + numberTwo);

//string to number shortcut system
numberTwo = +numberTwo;
console.log(numberOne + numberTwo);

//convert to string
numberOne = ''+numberOne;
console.log(numberOne);

//I want to add 0.1 and 0.2
var number1 = 0.1;
var number2 = 0.2;
var total = (number1 + number2);
total = total.toFixed(1);
console.log(total);