const convertToCelsius = function(tempFahrenheit) {
    if (typeof(tempFahrenheit) === 'number') {
      let tempCelcius = (tempFahrenheit - 32) * 5/9
      return Math.round(tempCelcius * 10) / 10
    } else {
      return "Input is not a valid number!"
    }
};

const convertToFahrenheit = function(tempCelcius) {
    if (typeof(tempCelcius) === 'number') {
      let tempFahrenheit = tempCelcius * (9/5) + 32
      return Math.round(tempFahrenheit * 10) / 10
    } else {
      return "Input is not a valid number!"
    }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
