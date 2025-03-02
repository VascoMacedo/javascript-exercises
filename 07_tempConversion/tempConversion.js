const convertToCelsius = function(tempF) {
  let tempValue = ((tempF - 32)*(5/9));
  let roundedTemp = Math.round(tempValue * 10) / 10;
  return roundedTemp;
};

const convertToFahrenheit = function(tempC) {
  let tempValue = ((tempC * (9/5))+ 32);
  let roundedTemp = Math.round(tempValue * 10) / 10;
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
