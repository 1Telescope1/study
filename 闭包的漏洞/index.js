var o = (function () {
  var obj = {
    a: 1,
    b: 2
  };

  // 解决办法
  // 1.把原型设为null
  Object.setPrototypeOf(obj, null);

  return {
    get: function (k) {
      return obj[k];
    }

    // 2.筛选对象本身的属性而不是原型上的
    // get:function(k) {
    //   if(obj.hasOwnProperty(k)) {
    //     return obj[k];
    //   } else {
    //     return undefined;
    //   }
    // }
  };
})();

// 如何在不改变上面代码情况下
// 修改obj
Object.defineProperty(Object.prototype, 'abc', {
  get() {
    return this;
  }
});

console.log(o.get('abc'));

var obj2 = o.get('abc');
obj2.a = 100;
obj2.c = 200;

console.log(o.get('a'));
