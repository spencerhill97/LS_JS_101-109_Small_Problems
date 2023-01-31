// Problem 1:

function letterPercentages(string) {
  let result = { lowercase: 0, uppercase: 0, neither: 0};

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    
    if (/[a-z]/.test(char)) {
      result.lowercase += 1;
    } else if (/[A-Z]/.test(char)) {
      result.uppercase += 1;
    } else {
      result.neither += 1;
    }
  }

  for (let key in result) {
    result[key] = ((result[key] / string.length) * 100).toFixed(2);
  }

  return result;
}

// Problem 2:

function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3].sort((a, b) => a - b);

  function equilateral(sides) {
    return sides.every(side => side === sides[0]);
  }

  function isosceles(sides) {
    let duplicates = sides.filter((side, index) => sides.indexOf(side) !== index);

    return duplicates.length === 1 && sides[0] + sides[1] > sides[2];
  }

  function scalene(sides) {
    let duplicates = sides.filter((side, index) => sides.indexOf(side) !== index);

    return duplicates.length === 0;
  }

  function invalid(sides) {
    return sides[0] + sides[1] <= sides[2];
  }

  if (invalid(sides)) {
    return 'invalid';
  } else if (equilateral(sides)) {
    return 'equilateral';
  } else if (scalene(sides)) {
    return 'scalene';
  } else if (isosceles(sides)) {
    return 'isosceles';
  }
}

// Problem 3:

function triangle(angle1, angle2, angle3) {
  let anglesArray = [angle1, angle2, angle3].sort((a, b) => a - b);
  let sumOfAngles = anglesArray.reduce((a, b) => a + b, 0);
  const VALID_SUM = 180
  let longestAngle = Math.max(...anglesArray);
  let shortestAngle = Math.min(...anglesArray);
  let middleAngle = sumOfAngles - longestAngle - shortestAngle;

  if (sumOfAngles !== VALID_SUM || shortestAngle === 0) {
    return 'invalid';
  } else if (anglesArray.some(angle => angle === 90)) {
    return 'right';
  } else if (longestAngle > 90) {
    return 'obtuse';
  } else if (anglesArray.every(angle => angle < 90)) {
    return 'acute';
  }
}

// Problem 4:

function fridayThe13ths(year) {
  let start = new Date(`01/01/${year}`);
  let end = new Date(`12/31/${year}`);

  let loop = new Date(start);

  let fridayThe13thsCount = 0;

  while (loop <= end) {
    if (loop.getDay() === 5 && loop.getDate() === 13) {
      fridayThe13thsCount += 1;
    }

    let newDate = loop.setDate(loop.getDate() + 1);
    loop = new Date(newDate);
  }

  console.log(fridayThe13thsCount)
}

// Problem 5:

function featured(number) {
  let startingIndex = number + 1;

  while (true) {
    if (featuredConditions(startingIndex)) {
      console.log(startingIndex); break;
    }

    startingIndex++;
  }

  function featuredConditions(number) {
    let dupes = String(number).split('');
    let result = dupes.filter((num, index)=> dupes.indexOf(num) !== index).length;

    return result === 0 && number % 2 !== 0 && number % 7 === 0;
  }
}

// Problem 6:

function sumSquareDifference(number) {
  let numberRange = numberRangeArray(number);
  let sumOfSquares = numberRange.reduce((a, b) => a + b, 0)**2; 
  let squareOfSum = numberRange.reduce((a, b) => a + (b**2), 0);
  
  
  function numberRangeArray(number) {
    let result = [];
    let index = 0;

    while (index < number) {
      result.push(index + 1);

      index++;
    }

    return result;
  }

  return sumOfSquares - squareOfSum;
}

// Problem 7:

function bubbleSort(array) {
  while (true) {
    let index = 0;
    let totalMoves = 0;

    while (index < array.length - 1) {
      let currentIndex = array[index];
      let nextIndex = array[index + 1];

      if (currentIndex > nextIndex) {
        array[index] = nextIndex;
        array[index + 1] = currentIndex;
        totalMoves++;
      }

      index++;
    }
    
    if (totalMoves > 0) {
      continue;
    } else {
      break;
    }
  }

  return array;
}

// Problem 8:

function longestSentence(string) {
  let array = string.split(/(?<=[.!?])/);
  let largestSentence = '';

  function findLength(string) {
    return string.split(' ').filter(word => word.length > 0).length;
  }

  for (let i = 0; i < array.length; i++) {
    let currentSentence = array[i];
    let currentWordTotal = findLength(array[i]);

    if (currentWordTotal > findLength(largestSentence)) {
      largestSentence = currentSentence;
    }

  }

  console.log(largestSentence);
  console.log(findLength(largestSentence));
}
