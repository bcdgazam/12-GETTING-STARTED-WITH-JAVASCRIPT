//12-9 Math absolute round floor ceil random

var number = -5;
var absoluteNumber = Math.abs(number);
console.log(absoluteNumber);

//round
var numberRound = 8.49645564;
var result = Math.round(numberRound);
console.log(result);

//ceil
var numberCeil = 8.92645564;
var resultTwo = Math.ceil(numberCeil);
console.log(resultTwo);

//floor
var numberFloor = 8.92645564;
var resultThree = Math.floor(numberFloor);
console.log(resultThree);

//random
var numberRand = Math.random()*100;
var resultFour = Math.round(numberRand);
console.log(resultFour);