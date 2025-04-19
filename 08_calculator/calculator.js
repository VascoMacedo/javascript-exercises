const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, num) => total + num
    , 0);
};

const multiply = function(a) {
  return a.reduce((total, num) =>  total * num
    , 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {	
  let total = 1;
  for(let n = a; n > 0; n--){
    total = total * n;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
