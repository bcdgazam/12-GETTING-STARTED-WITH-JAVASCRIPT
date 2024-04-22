//12-12 JavaScript Date timezone and Module Summary

/*
    12-1 Module overview, need for Javascript
    12-2 Run JavaScript in browser, VSCode, and codepen
    12-3 What is variable, declare a variable, see output
    12-4 Variable type, Numeric, String, Boolean
    12-5 Variable name naming convention and best practice
    12-6 Explore string case change index split
    // 12-7 Integer float parseInt parseFloat type conversion
    12-8 Mathematical operations in JavaScript
    12-9 Math absolute round floor ceil random
    12-10 Make conditional decision, if-else, comparison
    12-11 Multiple conditions, fulfill both conditions, else if
    12-12 JavaScript Date timezone and Module Summary
*/

//Exercise

let stCase = 'Hello bangladesh';
console.log(stCase.toUpperCase());
console.log(stCase.toLocaleLowerCase());
console.log(stCase.indexOf('b'))
console.log(stCase.split('s'));

    // 12-7 Integer float parseInt parseFloat type conversion
let num1 = 20;
let num2 = '30.30';

console.log(num1 + num2);

num1 = '' +num1;
num2 = parseFloat(num2);
console.log(num1 + num2);