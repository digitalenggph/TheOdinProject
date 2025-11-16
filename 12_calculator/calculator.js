const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(args) {
  let argsSum = 0;

  args.forEach(element => {
      argsSum += element
    }
  );

	return argsSum;
};


const multiply = function(args) {
  let argsProduct = 1;

  args.forEach(element => {
      argsProduct *= element
    }
  );

	return argsProduct;
};

const power = function(a, b) {
	return a**b
};

const factorial = function(a) {
  let b = 1;
  while (a > 0) {
    b *= a;
    a--;
  }
  return b
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
