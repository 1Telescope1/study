// function memorize(fn, context) {
//   const cache = {};
//   context = context || this;
//   return (...args) => {
//     if (!cache[args]) {
//       cache[args] = fn.apply(context, args);
//     }

//     return cache[args];
//   };
// }

// function add(a, b) {
//   return a + b;
// }

// const padd = memorize(add);
// console.log(padd(1, 2));
// console.log(padd(1, 2));

const obj = {}
const a = [1,2,3]
obj[a] = 123
console.log(obj);