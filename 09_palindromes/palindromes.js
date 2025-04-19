const palindromes = function (word) {
  let reversedWord =  word.toUpperCase().split('').reverse().join('');
  return reversedWord === word;
};

// Do not edit below this line
module.exports = palindromes;
