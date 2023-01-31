// Problem 1:

const { keyIn } = require("readline-sync");

function rotateArray(array) {
  let result;

  if (!Array.isArray(array)) {
    return undefined;
  } else if (array.length === 0) {
    return [];
  } else {
    result = array.slice();
  }

  console.log(result.concat(result.shift()));
}

// Problem 2:

function rotateRightmostDigits(number, count) {
  let str = String(number);
  let index = str.length - count;

  let result = str.slice(0, index)
                  .concat(
               str.slice(index + 1), 
               str.slice(index, index + 1));
  
  return Number(result);
}

// Problem 3:

function maxRotation(number) {
  let str = String(number);
  let startIdx = 0;
  let result;

  while (startIdx < str.length) {
    str = str.slice(0, startIdx)
                .concat(
             str.slice(startIdx + 1),
             str.slice(startIdx, startIdx + 1));

    startIdx++;
  }

  return Number(str);
}

// Problem 4:

function minilang(string) {
  let register = 0;
  let stack = [];
  let array = string.split(' ');

  for (let i = 0; i < array.length; i++) {
    let word = array[i];

    if (+word || word === '0') {
      register = +word;
    } else if (word === 'PUSH') {
      stack.push(register);
    } else if (word === 'ADD') {
      register = register + Number((stack.slice(-1)));
      stack.pop();
    } else if (word === 'SUB') {
      register = register - Number(stack.slice(-1));
      stack.pop();
    } else if (word === 'MULT') {
      register = register * Number(stack.slice(-1));
      stack.pop();
    } else if (word === 'DIV') {
      register = Math.floor(register / Number(stack.slice(-1)));
      stack.pop();
    } else if (word === 'REMAINDER') {
      register = register % Number(stack.slice(-1));
      stack.pop();
    } else if (word === 'POP') {
      register = stack.pop();
    } else if (word === 'PRINT') {
      console.log(register);
    }
  }
}

//Problem 5:

function wordToDigit(string) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  return string.split(' ').filter(word => {
    let specialChars = '';

    if (word.endsWith(specialChars)) {
      specialChars = word.split('').pop();
      return wordToNumberSwitch(word) + specialChars;
    } else {
      return wordToNumberSwitch(word);
    }
  }).join(' ');

  function wordToNumberSwitch(word) {
    switch(word) {
      case 'zero':
        return '0';
        break;
      case 'one':
        return '1';
        break;
      case 'two':
        return '2';
        break;
      case 'three':
        return '3';
        break;
      case 'four':
        return '4';
        break;
      case 'five':
        return '5';
        break;
      case 'six':
        return '6';
        break;
      case 'seven':
        return '7';
        break;
      case 'eight':
        return '8';
        break;
      case 'nine':
        return '9';
        break;
      default:
        return word;
        break;
    }
  }
}

// Problem 6:

function fibonacci(number) {
  if (number <= 2) {
    return 1;
  }
  return fibonacci(number - 1) + fibonacci(number - 2);
}

// Problem 7:

function fibonacci(n) {
  let fib = 1;
  let fibArray = [];
  let previousValue = 1;
  
  for (let index = 0; index < n; index++) {
    if (fibArray.length < 2) {
      fibArray.push(1); continue;
    }

    fib = fibArray[index - 1] + fibArray[index - 2];
    fibArray.push(fib);
  }

  return fibArray.slice(-1);
}

// Problem 8:

let fibMemory = {};


function fibonacci(n) {
  if (n <= 2) {
    return 1;
  } else if (fibMemory[n]) {
    return fibMemory[n];
  } else {
    fibMemory[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return fibMemory[n];
  }
}