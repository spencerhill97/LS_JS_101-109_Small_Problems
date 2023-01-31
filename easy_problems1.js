// Problem 1:

function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

// Problem 2:

// let index = 1;

while (index < 100) {
  if (index % 2 === 1) {
    console.log(index);
  }

  index++;
}

// Problem 3:

let index = 1;

while (index < 100) {
  if (index % 2 === 0) {
    console.log(index);
  }

  index++;
}

// Problem 4:

const readline = require('readline-sync');

const SQUAREMETERS_TO_FEET = 10.7639;

function invalidInput(number) {
  return number === Number(number);
}

console.log('Enter the length of the room in meters: ');
let length = Number(readline.question());

while (!invalidInput(length)) {
  console.log('Please enter a valid number for length of the room!');
  length = Number(readline.question());
}

console.log('Enter the width of the room in meters: ');
let width = Number(readline.question());

while (!invalidInput(width)) {
  console.log('Please enter a valid number for width of the room!');
  width = Number(readline.question());
}

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQUAREMETERS_TO_FEET);

console.log('The area of the room is ' + areaInMeters.toFixed(2) + ' square meters ' + areaInFeet.toFixed(2) + ' square feet.');

// Problem 5:

const readline = require('readline-sync');

console.log('What is the bill?');
let billAmount = Number(readline.question());

console.log('What is the tip percentage?');
let tipPercentage = Number(readline.question());

let tipAmount = billAmount * (tipPercentage / 100);

console.log('The tip is $' + tipAmount);
console.log('The total is $' + (billAmount + tipAmount));

// Problem 6:

const readline = require('readline-sync');

console.log('Please enter an integer greater than 0: ');
let integer = Number(readline.question());

console.log('Enter "s" to compute the sum, or "p" to compute the productt.');
let sumOrProduct = readline.question().toLowerCase();

while (true) {
  if (sumOrProduct === 's' || sumOrProduct === 'p') {
    break;
  }

  console.log('Invalid input! Please enter "s" for sum or "p" for product.');
  sumOrProduct = readline.question().toLowerCase();
}

function zeroToIntegerArray(integer) {
  let index = 1;
  let result = [];

  while (index <= integer) {
    result.push(index);

    index++;
  }

  return result;
}

if (sumOrProduct === 's') {
  return zeroToIntegerArray(integer).reduce((a, b) => a + b, 0);
} else {
  return zeroToIntegerArray(integer).reduce((a, b) => a * b, 1);
}

// Problem 7:

function shortLongShort(string1, string2) {
  let longestString = [string1, string2].sort((a, b) => a.length - b.length)[1];
  let shortestString = [string1, string2].sort((a, b) => a.length - b.length)[0];

  console.log(shortestString + longestString + shortestString);
}

// Problem 8:

function isLeapYear(year) {
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  } else if (year % 4 === 0) {
    return true
  } else {
    return false
  }
}

// Problem 9:

function isLeapYear(year) {
  if (year < 1752 && year % 4 === 0) {
    return true;
  } else if (year < 1752 && year % 4 !== 0) {
    return false;
  } else if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

// Problem 10:

function multisum(number) {
  let index = 1;
  let result = [];

  while (index <= number) {
    if (index % 3 === 0 || index % 5 === 0) {
      result.push(index);
    }

    index++;
  }

  return result.reduce((a, b) => a + b, 0);
}

// Problem 11:

function utf16Value(string) {
  return string.split('').reduce((a, b, index) => a + string.charCodeAt(index), 0);
}




