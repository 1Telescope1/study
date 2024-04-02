function transform(str) {
  const arr = str.split('_');
  const res = [];
  res.push(arr.shift());
  arr.forEach((item) => {
    res.push(item.slice(0, 1).toUpperCase() + item.slice(1));
  });
  return res.join('');
}

console.log(transform('a_name'));
console.log(transform('a_name_age'));
