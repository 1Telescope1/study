function memorize(fn) {
  const cache = {};
  return (...args) => {
    if (!cache[args]) {
      cache[args] = fn.apply(this, args);
    }

    return cache[args];
  };
}

function add(a, b) {
  return a + b;
}

const padd = memorize(add);
console.log(padd(1, 2));
console.log(padd(1, 2));
