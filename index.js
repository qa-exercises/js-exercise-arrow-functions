/*

💪 Exercise: Arrow functions

🎯 Your task: 
  - Convert these functions into arrow functions.

💡 Tip:
The syntax to define an arrow function looks like this:
const doSomething = (param1, param2) => { ... }

*/

function sayHelloWorld() {
  console.log('Hello, world!')
}

function isEven(num) {
  return num % 2 === 0
}

function add(num1, num2) {
  return num1 + num2
}

// Do not change the code below this line.
sayHelloWorld()
console.log('Is 5 even?', isEven(5))
console.log('What is 40 + 2?', add(40, 2))
