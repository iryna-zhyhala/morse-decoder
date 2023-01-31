const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let result = '';
  for (let i = 0; i < expr.length; i = i + 10) {
    let encodedLetter = expr.substring(i, i + 10);
    if (encodedLetter == '**********') {
      result += ' ';
      continue;
    }
    let key = '';
    for (let j = 0; j < encodedLetter.length; j +=2) {
      let temp = encodedLetter.substring(j, j + 2);
      if (temp == '10') {
        key += '.';
      } else if (temp == '11') {
        key += '-';
      }
    }
    result += MORSE_TABLE[key];
  }
  return result;
}

module.exports = {
    decode
}