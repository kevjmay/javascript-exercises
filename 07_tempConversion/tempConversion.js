const convertToCelsius = function(num) {

  let temp = (num - 32) * 5/9
  temp = temp.toFixed(1)
  intTemp = parseFloat(temp)

  return intTemp

};

const convertToFahrenheit = function(num) {

  let temp = ((num * 9/5) + 32);
  temp = temp.toFixed(1)
  intTemp = parseFloat(temp)

  return intTemp

};

console.log(convertToCelsius(52))
console.log(convertToFahrenheit(11.1))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
