// Problem 1:

function greetings(arr, obj) {
  let name = arr.join(' ');
  let title = obj.title;
  let occupation = obj.occupation;

  console.log(`Hello, ${name}! Nice to have a ${title} ${occupation} around!`);
}

greetings(['John', 'Q', 'Doe'], { title: "Master", occupation: "Plumber" });

// Problem 2:

let readline = require('readline-sync');

console.log('Hello! What\'s your name?');
let answer = readline.question();

if (answer.endsWith('!')) {
  console.log('HELLO ' + answer.toUpperCase() + '. WHY ARE WE SCREAMING?');
} else {
  console.log('Hello ' + answer);
}

// Problem 3:

function productOfNumbers(num1, num2) {
  return num1 * num2;
}

// Problem 4:

function squareOfNumber(num1) {
  return num1 * num1;
}

// Problem 5:

let readline = require('readline-sync');

function prompt(integer) {
  console.log(`==> ${integer}`);
}

prompt('Enter the first number:');
let firstNumber = Number(readline.question());

prompt('Enter the second number:');
let secondNumber = Number(readline.question());

prompt(firstNumber + secondNumber);
prompt(firstNumber - secondNumber);
prompt(firstNumber * secondNumber);
prompt(Math.floor(firstNumber / secondNumber));
prompt(firstNumber % secondNumber);
prompt(firstNumber ** secondNumber);

// Problem 6:

function penultimate(string) {
  return string.split(' ').slice(-2, -1);
}

// Problem 7:

function xor(var1, var2) {
  if (var1 && var2) {
    return false;
  } else if (!var1 && !var2) {
    return false;
  } else {
    return true;
  }
}

// Problem 8:

function oddities(arr) {
  return arr.filter((element, index) => index % 2 === 0);
}

// Problem 9:

function teddyRandomAge() {
  let randomAge = Math.floor(Math.random() * (120 - 20) + 20);
  
  console.log('Teddy is ' + randomAge + ' years old!')
}

// Problem 10:

let readline = require('readline-sync');

console.log('What is your age?');
let age = readline.question();

console.log('What age do you want to retire?');
let retirementAge = readline.question();

let date =  new Date().getFullYear();
let yearsToRetirement = retirementAge - age;
let retirementYear = date + yearsToRetirement;

console.log('It\'s ' + date + '. You will retire in ' + retirementYear + '.');
console.log('You have only ' + yearsToRetirement + ' years of work to go!');

// Problem 11:

function centerOf(string) {
  let middleCharacter = string.length / 2;

  if (string.length % 2 === 0) {
    console.log(string[middleCharacter - 1] + string[middleCharacter]);
  } else {
    console.log(string[Math.floor(middleCharacter)]);
  }
}

// Problem 12:

function negative(num) {
  return num < 0 ? num : num * -1;
}

