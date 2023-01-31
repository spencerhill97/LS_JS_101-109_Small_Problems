// Problem 1:

const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(degreesFloat) {
  let degreesInt = Math.floor(degreesFloat);
  let minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  let seconds = Math.floor(
    (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) *
    SECONDS_PER_DEGREE
  );

  return String(degreesInt) + DEGREE + padZeroes(minutes) + "'" +
                                       padZeroes(seconds) + '"';
}

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
}

// Problem 2:

function union(arr1, arr2) {
  let array = arr1.concat(arr2);
  let result = [];
  let index = 0;

  for (let i = 0; i < array.length; i++) {
    if (!result.includes(array[i])) {
      result.push(array[i]);
    } else if (result.includes(array[i])) {
      continue;
    }
  }

  return result;
}

// Problem 3:

function halvsies(array) {
  let result = [];
  let halfMark = findHalfwayMark(array);

  result.push(array.slice(0, halfMark));
  result.push(array.slice(halfMark));


  function findHalfwayMark(array) {
    let halfMark = 0;

    if (array.length % 2 === 0) {
      halfMark = array.length / 2;
    } else if (array.length % 2 !== 0) {
      halfMark = Math.round(array.length / 2);
    }

    return halfMark;
  }

  return result;
}

// Problem 4:

function findDup(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== i) {
      return arr[i];
    }
  }

  return undefined;
}

// Problem 5:

function interleave(arr1, arr2) {
  let result = [];
  let index = 0;

  while (index < arr1.length) {
    result.push(arr1[index], arr2[index]);

    index++;
  }

  console.log(result);
}

// Problem 6:

function multiplicativeAverage(arr) {
  let index = 0;
  let previousNum = arr[index];
  let productOfArr = 0;

  while (index < arr.length - 1) {
    productOfArr = previousNum * arr[index + 1];
    previousNum = productOfArr;

    index++;
  }

  return (productOfArr / arr.length).toFixed(3);
}

// Problem 7:

function multiplyList(arr1, arr2) {
  let result = [];
  let index = 0;

  while (index < arr1.length) {
    result.push(arr1[index] * arr2[index]);

    index++;
  }

  console.log(result);
}

// Problem 8:

function digitList(num) {
  return String(num).split('').map(num => Number(num));
}

// Problem 9:

let vehicles = ['car', 'car', 'Truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(arr) {
  let obj = {};
  let index = 0;

  while (index < arr.length) {
    if (!(arr[index] in obj)) {
      obj[arr[index]] = 0;
    }

    obj[arr[index]] += 1;
    index++;
  }

  for (let key in obj) {
    console.log(`${key} => ${obj[key]}`);
  }
}

// Problem 10:

function average(arr) {
  let average = arr.reduce((a, b) => a + b) / arr.length;

  return Math.floor(average);
}

// Problem 11:

function timeOfDay(num) {
  const minutesInADay = 1440;
  let hours = Math.floor(findTotalMinutes(num) / 60);
  let minutes = findTotalMinutes(num) % 60;

  function addZero(minutesOrHour) {
    return minutesOrHour < 10 ? `0${minutesOrHour}` : String(minutesOrHour);
  }

  let time = `${addZero(hours)}:${addZero(minutes)}`;

  function findTotalMinutes(num) {
    if (num < (minutesInADay * -1)) {
      return minutesInADay + (num % 1440);
    } else if (num > (minutesInADay * -1) && num < 0) {
      return minutesInADay + (num % minutesInADay);
    } else if (num > minutesInADay) {
      return num % minutesInADay;
    } else {
      return num;
    }
  }

  return time;
}

// Problem 12: 

function afterMidnight(time) {
  const minutesInADay = 1440;
  let timeArray = time.split(':');
  let result = (Number(timeArray[0] * 60)) + Number(timeArray[1]);

  if (result === minutesInADay) {
    return 0;
  } else {
    return result;
  }
}

function beforeMidnight(time) {
  const minutesInADay = 1440;
  let timeArray = time.split(':');
  let result = (Number(timeArray[0] * 60)) + Number(timeArray[1]);

  if (result === 0 || result === minutesInADay) {
    return 0;
  } else {
    return (result - 1440) * -1;
  }
}
