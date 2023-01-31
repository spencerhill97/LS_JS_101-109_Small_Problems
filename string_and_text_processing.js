// Problem 1:

function isUppercase(string) {
  return string.split('').every(letter => uppercaseLetterCheck(letter));

  function uppercaseLetterCheck(letter) {
    return !/[a-z]/.test(letter);
  }
}

// Problem 2:

function removeVowels(arr) {
  let result = arr.map(word => {
    return word.split('').filter(letter => !vowelCheck(letter)).join('');
  })
  
  function vowelCheck(letter) {
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];

    return VOWELS.includes(letter.toLowerCase());
  }

  console.log(result);
}

// Problem 3:

function letterCaseCount(string) {
  let object = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let i = 0; i < string.length; i++) {
    if (/[a-z]/.test(string[i])) {
      object.lowercase += 1;
    } else if (/[A-Z]/.test(string[i])) {
      object.uppercase += 1;
    } else {
      object.neither += 1;
    }
  }

  return object;
}

// Problem 4:

function wordCap(string) {
  return string.split(' ').map(word => {
    return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

// Problem 5:

function swapCase(string) {
  return string.split(' ').map(word => {
    return word.split('').map(letter => checkCase(letter)).join('');
  }).join(' ');
  
  function checkCase(letter) {
    if (letter === letter.toLowerCase()) {
      return letter.toUpperCase();
    } else if (letter === letter.toUpperCase()) {
      return letter.toLowerCase();
    } else {
      return letter;
    }
  }
}

// Problem 6:

function staggeredCase(string) {
  return string.split('').map((char, index) => {
    if (index === 0 || index % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
}

// Problem 7:

function staggeredCase(string) {
  let count = 0;

  return string.split('').map(char => {
    if (!/[a-z, A-Z]/.test(char) || char === ' ') {
      return char;
    } else if (count === 0) {
      count++; return char.toUpperCase();
    } else {
      count --; return char.toLowerCase();
    }
  }).join('');
}

// Problem 8:

function wordLengths(string) {
  if (!string) {
    return [];
  }

  return string.split(' ').map((word) => {
    return word + ' ' + String(word.length);
  })
}

// Problem 9:

function searchWord(word, string) {
  return string.split(' ')
               .filter(char => char
               .toLowerCase() === word
               .toLowerCase()).length;
}

// Problem 10:

function searchWord(word, string) {
  return string.split(' ').map(char => {
    if (char.toLowerCase() === word.toLowerCase()) {
      return `**${char}**`;
    } else {
      return char;
    }
  }).join(' ');
}
