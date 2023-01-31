// Problem 1:

function crunch(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str.length === 1) {
      return str;
    } else if (str === "") {
      return "";
    } else if (i === 0) {
      result += str[i];
    } else if (str[i] !== str[i - 1]) {
      result += str[i];
    } else {
      continue;
    }
  }

  console.log(result);
}

// Problem 2:

function logInBox(str) {
  let finalStr = '|   ' + str + '   |';
  let topAndBottomOfBox = '+' + '-'.repeat(finalStr.length - 2) + '+';
  let blankRowOfBox = '|' + ' '.repeat(finalStr.length - 2) + '|';

  console.log(topAndBottomOfBox);
  console.log(blankRowOfBox);
  console.log(finalStr);
  console.log(blankRowOfBox);
  console.log(topAndBottomOfBox);
  
}

// Problem 3:

function stringy(num) {
  let result = "";
  let index = 0;

  while (index < num) {
    if (index % 2 === 0) {
      result += '1';
    } else {
      result += '0';
    }

    index++;
  }

  return result;
}

// Problem 4:

function findFibonacciIndexByLength(num) {
  function findFibonacciIndexByLength(length) {
    let first = 1n;
    let second = 1n;
    let count = 2n;
    let fibonacci;
  
    do {
      fibonacci = first + second;
      count += 1n;
      first = second;
      second = fibonacci;
    } while (String(fibonacci).length < length);
  
    return count;
  }
}

// Problem 5:

function triangle(num) {
  let index = 1;

  while (index < num + 1) {
    console.log(' '.repeat(num - index) + '*'.repeat(index));
    index++;
  }
}

// Problem 6:

const readline = require('readline-sync');

function prompt(msg) {
  return console.log(`=> ${msg}`);
}

prompt('Hello! Welcome to Madlibs!');

prompt('Please choose a noun.');
let noun = readline.question().trim().toLowerCase();

prompt('Please choose a verb.');
let verb = readline.question().trim().toLowerCase();

prompt('Please choose an adverb.');
let adverb = readline.question().trim().toLowerCase();

prompt('Please choose an adjective.');
let adjective = readline.question().trim().toLowerCase();

console.log(`The man ${verb} because of the ${adjective} ${noun}.`);
console.log(`The ${noun} was something that the man obsessed with and`);
console.log(`he ${adverb} ${verb} day and night to ease his mind.`);

// Problem 7:

function twice(num) {
  let numString = String(num);
  let endsWith = numString.slice(0, numString.length / 2);

  if (numString.length % 2 !== 0) {
    return num * 2;
  } else if (numString.endsWith(endsWith)) {
    return num;
  } else {
    return num * 2;
  }
}

// Problem 8:

function getGrade(num, num1, num2) {
  let grade = (num + num1 + num2) / 3;
  
  if (grade >= 90) {
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Problem 9:

function cleanUp(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (!/^[A-Za-z\s]*$/.test(str[i])) {
      result += ' ';
    } else {
      result += str[i];
    }
  }
  
  return result.replace(/  +/g, ' ');
  
}

// Problem 10:

function century(num) {
  let result = "";
  if (String(num).endsWith('00')) {
    result += String(num).slice(0, -2);;
  } else {
    result += Number(String(num).slice(0, -2)) + 1;
  }

  let tenthNum = result.split('')[result.length -2];

  if (result.endsWith('1') && tenthNum !== '1') {
    result += 'st';
  } else if (result.endsWith('2') && tenthNum !== '1') {
    result += 'nd';
  } else if (result.endsWith('3') && tenthNum !== '1') {
    result += 'rd';
  } else {
    result += 'th';
  }

  return result;
}
