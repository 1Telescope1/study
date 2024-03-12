function myFlat(arr) {
  const res = [];
  function _(item) {
    if (Array.isArray(item)) {
      item.forEach((element) => {
        _(element);
      });
    } else {
      res.push(item);
    }
  }
  arr.forEach((element) => {
    _(element);
  });
  return res;
}

const a = [1, 2, [3, 4, [5, [6]], 7, 8], 9];
// console.log(myFlat(a));

function deepFlat(arr, cnt) {
  const res = [];
  function _(item, num) {
    if (Array.isArray(item) && num > 0) {
      item.forEach((element) => {
        _(element, num - 1);
      });
    } else {
      res.push(item);
    }
  }
  arr.forEach((element) => {
    _(element, cnt);
  });
  return res;
}

console.log(deepFlat(a, 1));
