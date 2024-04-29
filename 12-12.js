//12-12 JavaScript Date timezone and Module Summary

/*
    12-2 Run JavaScript in browser, VSCode, and codepen
    12-3 What is variable, declare a variable, see output
    12-4 Variable type, Numeric, String, Boolean
    12-5 Variable name naming convention and best practice
    12-6 Explore string case change index split (uppercase, lowercase, index, split)
    12-7 Integer float parseInt parseFloat type conversion (string to number, number to string)
    12-8 Mathematical operations in JavaScript
    12-9 Math absolute round floor ceil random (negative to positive, round, ceil, floor, random, toFiexd )
    12-10 Make conditional decision, if-else, comparison
    12-11 Multiple conditions, fulfill both conditions, else if
    12-12 JavaScript Date timezone and Module Summary
*/

//Exercise

// let n1 = -30.01;
// let n2 = Math.abs(n1);
// console.log(Math.abs(n2));
// console.log(Math.round(n2));
// console.log(Math.ceil(n2));
// console.log(Math.floor(n2));

// let randNumber = Math.random(n2) * 10;
// let strToRandNumber = randNumber.toFixed(2);
// console.log(Math.abs(strToRandNumber));


let aluPrice = 20;

if (aluPrice < 22) {
    console.log('I will buy the alu');
}else{
    console.log('I have to eat only rice today! :(')
}

let picnicPerson = 100;
if(picnicPerson == 100){
    console.log('We are going to picnit by buss')
} else{
    console.log('We are going to by train!')
}

var goPicnic = 20;

if(goPicnic != 10){
    console.log('We will go to picnic');
}
else{
    console.log('Sorry, We want to stay home due to not fill up money')
}