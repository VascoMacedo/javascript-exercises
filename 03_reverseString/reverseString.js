const reverseString = function(str) {

  let splitString = str.split("");
  let reversedArray = splitString.reverse();
  let joinedArray = reversedArray.join("");
  
  return joinedArray;
};

// Do not edit below this line
module.exports = reverseString;
