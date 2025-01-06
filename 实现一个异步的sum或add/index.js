function add(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 10);
  });
}

// 初级实现: 串行方式
// async function sum(...arr) {
//   let s = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     s = await add(s, arr[i]);
//   }
//   return s;
// }

// sum(1, 2).then((res) => {
//   console.log(res);
// });

// 中级实现: 并行方式;
function add(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 10);
  });
}

async function sum(arr) {
  if (arr.length == 0) return add(0, 0);
  if (arr.length == 1) return add(0, arr[0]);
  if (arr.length == 2) return add(arr[0], arr[1]);
  const mid = Math.floor(arr.length / 2);
  const [l, r] = await Promise.all([
    sum(arr.slice(0, mid)),
    sum(arr.slice(mid))
  ]);
  console.log(l, r);
  return sum([l, r]);
}
sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).then((res) => console.log(res));