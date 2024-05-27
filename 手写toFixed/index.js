const toFixed = function (number, decimalLength = 0) {
  var times = Math.pow(10, decimalLength);
  var fixed = number * times + 0.5;
  console.log(fixed, 123);
  return parseInt(fixed) / times;
};

console.log(toFixed(0.22835, 3)); // 0.229
