function curry(fn) {
  return function curryFn(...args) {
    if (fn.length > args.length) {
      return function(...args1) {
        return curryFn(...args, ...args1)
      }
    }
    return fn(...args)
  }
}

const fn = (x,y,z,a) => x+y+z+a
const myFn = curry(fn)
console.log(myFn(1)(2)(3));
console.log(myFn(1)(2)(3)(4))