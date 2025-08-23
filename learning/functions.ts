// functions
// a conatined place to have some code that you can run from anywhere else in your program
// why?
// makes the code easier to read
// function can be re used with out re typing out the same code again
// easy to test and debug

import { print } from "./helper.js";

// what is a parameter
// it's the same as declaring a vairable (const/let)

const thingOne = 'thing one';
const thingTwo = 'thing two';
const combined = thingOne + ' ' + thingTwo;
// print(combined)

function addNumbers(firstNumber: number, secondNumber: number) {
    return firstNumber + secondNumber;
}

print('hello');

const answer = addNumbers(2, 5)
print(answer)