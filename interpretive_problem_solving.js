// Problem 1:

function lightsOn(switches) {
  let index = 1;
  let obj = switchesArray(switches);

  while (index <= switches) {
    for (let key in obj) {
      if (Number(key) % index === 0) {
        if (obj[key] === 'off') {
          obj[key] = 'on';
        } else if (obj[key] === 'on') {
          obj[key] = 'off';
        }
      } else {
        null;
      }
    }

    index++;
  }
  
  function switchesArray(switches) {
    let index = 1;
    let result = {};

    while (index <= switches) {
      result[index] = 'off';

      index++;
    }

    return result;
  }

  let result = Object.keys(obj).filter(number => obj[number] === 'on');
  return result.map(number => Number(number));
}

// Problem 2:

function diamond(number) {
  let index = 1;
  let result = [];
  
  while (index <= number) {
    let whitespace = (number - index) / 2;

    result.push(' '.repeat(whitespace) + 
                '*'.repeat(index) + 
                ' '.repeat(whitespace));

    index += 2;
  }

  result.push(result.slice(0, result.length -1).reverse());

  console.log(result.flat().join("\r\n"));
}

// Problem 3:

function isBlockWord(word) {
  const BLOCKS = {
    blockOne: ['B', 'O'],
    blockTwo: ['X', 'K'],
    blockThree: ['D', 'Q'],
    blockFour: ['C', 'P'],
    blockFive: ['N', 'A'],
    blockSix: ['G', 'T'],
    blockSeven: ['R', 'E'],
    blockEight: ['F', 'S'],
    blockNine: ['J', 'W'],
    blockTen: ['H', 'U'],
    blockEleven: ['V', 'I'],
    blockTwelve: ['L', 'Y'],
    blockThirteen: ['Z', 'M'],
  }

  for (let i = 0; i < word.length; i++) {
    let result = word.toUpperCase();

    currentBlock = Object.values(BLOCKS).filter(key => key.includes(word[i])).flat();

    if (result.includes(currentBlock[0]) && result.includes(currentBlock[1])) {
      return false;
    } else if (result.indexOf(result[i]) !== i) {
      return false;
    }
  }

  return true;
}

// Problem 4:

function star(number) {
  let index = 0;
  let middleNumber = Math.round(number / 2);
  let totalWhiteSpace = number - 3;
  let result = [];

  while (index < middleNumber) {
    if (index === middleNumber - 1) {
      result.push('*'.repeat(number)); break;
    }

    let outsideWhiteSpace = ' '.repeat(index);
    let insideWhiteSpace = ' '.repeat((totalWhiteSpace - (index + index)) / 2);

    result.push(outsideWhiteSpace +
                '*' +
                insideWhiteSpace +
                '*' +
                insideWhiteSpace +
                '*' +
                outsideWhiteSpace);
    index++;
  }

  return result.concat(result.slice(0, result.length - 1).reverse()).join("\r\n");
}
