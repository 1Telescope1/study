function formatNumberWithCommas(num) {
  if (typeof num != 'number') return;
  const str = String(num);
  let [integer, decimal] = str.split('.');
  const a = integer.split('');
  const len = a.length;
  let res = [];
  while (a.length) {
    res.unshift(a.pop());
    if ((len - a.length) % 3 == 0 && a.length != 0) {
      res.unshift(',');
    }
  }
  if (decimal) {
    res.push('.', decimal);
  }
  return res.join('');
}

const num = -1234.123456789;

console.log(formatNumberWithCommas(num));

function formatNumberWithRegex(num) {
  if (typeof num != 'number') return;
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

console.log(formatNumberWithRegex(num));
console.log(3 % 3);
