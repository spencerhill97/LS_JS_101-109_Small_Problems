// Problem 1: 

function repeater(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (!/[' ']/.test(string[i])) {
      result += string[i].repeat(2);
    } else {
      result += string[i];
    }
  }

  return result;
}

// Problem 2:

function doubleConsonants(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (/[a-z,A-Z]/.test(string[i])) {
      result += string[i].repeat(2);
    } else {
      result += string[i];
    }
  }

  return result;
}

// Problem 3:


function reverseNumber(num) {
  let result = String(num).split('').reverse().join('');
  
  return Number(result);
}

// Problem 4:

function sequence(num) {
  let index = 1;
  let result = [];

  while (index <= num) {
    result.push(index);

    index++;
  }

  return result;
}

// Problem 5:

function swapName(string) {
  let lastName = string.split(' ').slice(-1);
  let restOfName = string.split(' ').slice(0, -1);

  return lastName.join('') + ', ' + restOfName.join(' ');
}

// Problem 6:

function sequence(count, num) {
  let index = 0;
  let sum = 0;
  let result = [];
  
  while (index < count) {
    sum += num;
    result.push(sum);

    index++;
  }

  return result;
}

// Problem 7:

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}

// Problem 8:

function reverseWords(string) {
  return string.split(' ').map(word => {
    if (word.length > 4) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  }).join(' ');
}

// Problem 9:

function reverse(array) {
  let index = 0;
  
  while (index < array.length) {
    array.splice(index, 0, array.pop());
        
    index++;
  }
  
  return array;
};

// Problem 10:

function isBalanced(string) {
  let array = string.split('').filter(char => char === ')' || char === '(');
  let index = 0;
  let sum = 0;
  
  while (index < array.length) {

    if (array[index] === '(') {
      sum += 1;
    } else if (array[index] === ')') {
      sum -= 1;
    }

    if (sum < 0) return false;

    index++;
  }

  return sum === 0 ? true : false;
}
