Function.prototype.myCall = function (ctx, ...args) {
  // 判断调用对象是否为函数
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  // 防止是null或undified的情况下 ctx[key]会报错
  ctx = ctx ===null || ctx === undefined ? globalThis : Object(ctx)
  const key = Symbol('temp')
  Object.defineProperty(ctx, key, {
    enumerable: false,
    value: this
  })
  const res = ctx[key](...args)
  delete ctx[key]
  return res
}

function add(a, b) {
  console.log(this, a, b)
  return a + b
}

add.myCall({}, 1, 5)
