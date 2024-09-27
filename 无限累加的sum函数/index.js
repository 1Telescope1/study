function sum(...args) {
  // allArgs 收集所有的 args
  let allArgs = args;

  // 返回一个 function 可以接受参数
  function fn(...args2) {
    allArgs = allArgs.concat(args2);
    return fn;
  }

  // function 上有一个属性叫 valueOf
  fn.valueOf = function () {
    // valueOf 触发时才开始累加
    return allArgs.reduce((res, cur) => res + cur, 0);
  };
  fn.toString = function () {
    return allArgs.reduce((res, cur) => res + cur, 0);
  };
  return fn;
}

console.log(sum(1, 2, 3).valueOf());
console.log(sum(1)(2, 3, 4));
// function sum(...args) {
//   const foo = (...rest) => sum(...args, ...rest);
//   foo.toString = () => args.reduce((x, y) => x + y, 0);
//   return foo;
// }
// console.log(sum(1)(2, 3) + sum(1)); // 7
// console.log(sum(10) * sum(10)); // 100
