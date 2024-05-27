Function.prototype.myCall = function (ctx, ...args) {
  // 防止是null或undified的情况下 ctx[key]会报错
  ctx = ctx || globalThis;
  const key = Symbol('temp');
  Object.defineProperty(ctx, key, {
    enumerable: false,
    value: this
  });
  const res = ctx[key](...args);
  delete ctx[key];
  return res;
};

function add(a, b) {
  console.log(this, a, b);
  return a + b;
}

add.myCall({}, 1, 5);
