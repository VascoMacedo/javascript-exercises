const sumAll = function(min, max) {
  let finalSum = 0;

  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  for(i=min; i <= max; i++){
    finalSum = finalSum + i;
  }

  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
