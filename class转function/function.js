'use strict';

function Example(name) {
  if (!(this instanceof Example)) {
    throw new TypeError('Class must be called with the new operator');
  }
  this.name = name;
}

Object.defineProperty(Example.prototype, 'func', {
  value: function func() {
    // 不可通过new调用
    if (!(this instanceof Example)) {
      throw new TypeError('Class must be called with the new operator');
    }
    console.log(this.name);
  },
  //方法不能被枚举
  enumerable: false
});
