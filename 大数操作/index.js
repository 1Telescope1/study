function add(a, b) {
  let len1 = a.length - 1;
  let len2 = b.length - 1;

  let res = '';
  let carry = 0;
  while (len1 >= 0 || len2 >= 0) {
    const num1 = Number(a[len1--]) || 0;
    const num2 = Number(b[len2--]) || 0;
    const sum = num1 + num2 + carry;
    res = (sum % 10) + res;
    carry = Math.floor(sum / 10);
  }
  if (carry) {
    res = carry + res;
  }
  return res;
}

// console.log(add('12', '19'));
// console.log(add('100', '1000000'));
// console.log(add('100', '900'));
// console.log(
//   add('1234123412341235123512351251235', '1324123512351251235123512351235')
// );

function multiply(a, b) {
  let len1 = a.length - 1;
  let len2 = b.length - 1;

  let res = '';
  let carry = 0;
  while (len1 >= 0 || len2 >= 0) {
    const num1 = Number(a[len1--]) || 0;
    const num2 = Number(b[len2--]) || 0;
    const sum = num1 * num2 + carry;
    res = (sum % 10) + res;
    carry = Math.floor(sum / 10);
  }
  for (let i = len1; i >= 0; i--) {
    for (let j = len2; j >= 0; j--) {
      const sum = num1 * num2 + carry;
      res = (sum % 10) + res;
    }
  }
  if (carry) {
    res = carry + sum;
  }
  return res;
}

console.log(multiply('12', '19'));
console.log(multiply('100', '1000000'));
console.log(multiply('100', '900'));
console.log(
  multiply('1234123412341235123512351251235', '1324123512351251235123512351235')
);
