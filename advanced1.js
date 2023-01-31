// Problem 1:

// Problem 2:

function transpose(matrix) {
  let newMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (newMatrix[j] === undefined) {
        newMatrix[j] = [matrix[i][j]];
      } else {
        newMatrix[j][i] = matrix[i][j];
      }
    }
  }

  return newMatrix;
}

// Problem 3:

function transpose(matrix) {
  let newMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (newMatrix[j] === undefined) {
        newMatrix[j] = [matrix[i][j]];
      } else {
        newMatrix[j][i] = matrix[i][j];
      }
    }
  }

  return newMatrix;
}

// Problem 4:

function rotate90(matrix) {
  let newMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (newMatrix[j] === undefined) {
        newMatrix[j] = [matrix[i][j]];
      } else {
        newMatrix[j][i] = matrix[i][j];
      }
    }
  }

  return newMatrix.map(array => array.reverse());
}

// Problem 5:

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

// Problem 6:

function mergeSort(arr) {
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  if (arr.length <= 1) return arr;

  return merge(mergeSort(left), mergeSort(right));
}

// Problem 7:

function binarySearch(data, target) {
  let index = 0;
  let binaryArray = data.slice();
  
  while (index < data.length) {
    middleElement = binaryArray[Math.floor(binaryArray.length / 2)];
    middleIndex = binaryArray.indexOf(middleElement);

    if (middleElement === target) {
      break;
    } else if (middleElement < target) {
      binaryArray = binaryArray.slice(middleIndex + 1, binaryArray.length);
    } else {
      binaryArray = binaryArray.slice(0, middleIndex);
    }
    
    index++;
  }

  return data.indexOf(middleElement);
}

// Problem 8:

const { default: Fraction } = require('fraction.js');
var fraction = require('fraction.js');

function egyptian(Fraction) {
  let incrementDenominator = 1;
  let remainder = Fraction;
  let result = [];


  while (true) {
    let sum = fraction(remainder) - fraction(1, incrementDenominator);

    if (sum === 0) {
      result.push(incrementDenominator);
      break;
    } else if (sum < 0) {
      incrementDenominator++;
      continue;
    } else {
      remainder = sum;
      result.push(incrementDenominator);
      incrementDenominator++;
    }
  }

  return result;
}

function unegyptian(Fraction) {
  let result = Fraction.map(num => fraction(1, num));
  return result.reduce((a, b) => fraction(a) + fraction(b), 0);
}
