// Problem 1:

function sum(num) {
  return String(num).split('').reduce((a, b) => Number(a) + Number(b));
}

// Problem 2:
function alphabeticNumberSort(array) {
  return array.sort((a, b) => {
    if (numberToWord(a) < numberToWord(b)) {
      return -1
    } else if (numberToWord(a) > numberToWord(b)) {
      return 1;
    } else {
      return 0;
    }
  });
  
  function numberToWord(number) {
    switch(number) {
      case 0:
        return 'zero';
        break;
      case 1:
        return 'one';
        break;
      case 2:
        return 'two';
        break;
      case 3:
        return 'three';
        break;
      case 4:
        return 'four';
        break;
      case 5:
        return 'five';
        break;
      case 6:
        return 'six';
        break;
      case 7:
        return 'seven';
        break;
      case 8:
        return 'eight';
        break;
      case 9:
        return 'nine';
        break;
      case 10:
        return 'ten';
        break;
      case 11:
        return 'eleven';
        break;
      case 12:
        return 'twelve';
        break;
      case 13:
        return 'thirteen';
        break;
      case 14:
        return 'fourteen';
        break;
      case 15:
        return 'fifteen';
        break;
      case 16:
        return 'sixteen';
        break;
      case 17:
        return 'seventeen';
        break;
      case 18:
        return 'eighteen';
        break;
      case 19:
        return 'nineteen';
        break;
      default:
        return 'error';
        break;
    }
  }
}

// Problem 3:

function multiplyAllPairs(product, array) {
  let result = [];

  for (let i = 0; i < product.length; i++) {
    array.forEach(num => result.push(num * product[i]));
  }

  return result.sort((a, b) => a - b);
}

// Problem 4:

function leadingSubstrings(string) {
  return string.split('')
               .map((letter, index, array) => array.slice(0, index + 1).join(''));
}

// Problem 5:

function substrings(string) {
  let result = [];

  string.split('').map((letter1, index1, array1) => {
    array1.slice(index1, array1.length).map((letter2, index2, array2) => {
      result.push(array2.slice(0, index2 + 1).join(''));
    })
  })

  return result;
}

// Problem 6:

function palindromes(string) {
  let subStringArray = substrings(string);

  function palindromeCheck(substring) {
    return substring.length > 1 && substring.split('').reverse().join('') === substring;
  }

  console.log(subStringArray.filter(sub => palindromeCheck(sub)));
}

// Problem 7:

function sumOfSums(arr) {
  let index = 1;
  let sum = 0;
  
  while (index <= arr.length) {
    sum += arr.slice(0, index).reduce((a, b) => a + b);

    index++;
  }

  console.log(sum);
}

// Problem 8:

function buyFruit(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let itemCount = arr[i][1];
    let item = arr[i][0];

    repeat(result, itemCount, item);
  }

  function repeat(arr, times, item) {
    for (let i = 0; i < times; i++) {
      arr.push(item);
    }
  }

  return result;
}

// Problem 9:

function transactionsFor(value, object) {
  let result = [];

  for (let sub in object) {
    let subValues = Object.values(object[sub]);
    
    if (subValues.includes(value)) {
      result.push(object[sub]);
    }
  }

  return result;
}

// Problem 10:

function isItemAvailable(id, object) {
  let filteredObject = transactionsFor(id, object);
  let idSum = 0;
  
  for (let key in filteredObject) {
    if (filteredObject[key].movement === 'in') {
      idSum += filteredObject[key].quantity;
    } else if (filteredObject[key].movement === 'out') {
      idSum -= filteredObject[key].quantity;
    }
  }

  return idSum > 0;
}
