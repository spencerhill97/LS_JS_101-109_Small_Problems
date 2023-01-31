// Problem 1:

const readline = require('readline-sync');

function prompt(msg) {
  return console.log(`==> ${msg}`);
}

let numArray = [];

prompt('Enter the 1st number:');
let numOne = readline.question();
numArray.push(numOne);

prompt('Enter the 2nd number:');
let numTwo = readline.question();
numArray.push(numTwo);

prompt('Enter the 3rd number:');
let numThree = readline.question();
numArray.push(numThree);

prompt('Enter the 4th number:');
let numFour = readline.question();
numArray.push(numFour);

prompt('Enter the 5th number:');
let numFive = readline.question();
numArray.push(numFive);

prompt('Enter the 6th and final number:');
let numSix = readline.question();

if (numArray.includes(numSix)) {
  return console.log(`The number ${numSix} appears in ${numArray.join(',')}.`);
} else {
  return console.log(`The number ${numSix} does not appear in ${numArray.join(',')}.`);
}

// Problem 2:

function isPalindrome(string) {
  let reverseString = string.split('').reverse().join('');

  return reverseString === string ? true : false;
}

// Problem 3:

function isRealPalindrome(string) {
  let specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";
  let noSpecialChars = string.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s/g, '' );
  
  return noSpecialChars.toLowerCase().split('').reverse().join('') === noSpecialChars.toLowerCase();
}

// Problem 4:

function isPalindromicNumber(num) {
  let stringNum = String(num);
  
  return stringNum === stringNum.split('').reverse().join('');
}

// Problem 5:

function runningTotal(arr) {
  let sum = 0;
  let index = 0;
  let result = [];

  while (index < arr.length) {
    sum += arr[index];
    result.push(sum);

    index++;
  }

  return result;
}

// Problem 6:

function wordSizes(string) {
  let obj = {};
  let wordLengthArray = string.split(' ').map((word) => String(word.length));
  
  for (let i = 0; i < wordLengthArray.length; i++) {
    if (string === '') {
      obj = {}; break;
    } else if (!(wordLengthArray[i] in obj)) {
      obj[wordLengthArray[i]] = 1;
    } else {
      obj[wordLengthArray[i]] = obj[wordLengthArray[i]] + 1;
    }
  }
  
  return obj;
}

// Problem 7:

function wordSizes(string) {
  let obj = {};
  let wordLengthArray = string.replace(/[^a-zA-Z0-9 ]/g, '')
                              .split(' ').map((word) => String(word.length));
  
  for (let i = 0; i < wordLengthArray.length; i++) {
    if (string === '') {
      obj = {}; break;
    } else if (!(wordLengthArray[i] in obj)) {
      obj[wordLengthArray[i]] = 1;
    } else {
      obj[wordLengthArray[i]] = obj[wordLengthArray[i]] + 1;
    }
  }
  
  return obj;
}

// Problem 8:

function swap(string) {
  let result = string.split(' ').map((word) => {
    if (word.length === 1) {
      return word;
    } else {
      return swapFirstAndLast(word);
    }
  }).join(' ');

  function swapFirstAndLast(word) {
    return word.slice(-1) + word.slice(1, -1) + word.slice(0, 1);
  }

  return result;
}

// Problem 9:

function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}

// Problem 10:

function stringToSignedInteger(string) {
  switch (string[0]) {
    case "-":
      return -stringToInteger(string.slice(1, string.length));
    case "+":
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}

// Problem 11:

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

// Problem 12:

function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(-number)}`;
    case +1:
      return `+${integerToString(number)}`;
    default:
      return integerToString(number);
  }
}