function hasProperty1(obj, key) {
  return obj[key] !== undefined;
}
// 缺点：有可能属性就是赋值undified
var obj1 = { a: undefined };
console.log(hasProperty1(obj1, 'a')); //false

function hasProperty2(obj, key) {
  return Object.keys(obj).includes(key);
}
// 缺点：加了属性但设置了enumerable就无法判断
Object.defineProperty(obj1, 'c', {
  value: 1,
  enumerable: false //不可遍历
});
console.log(hasProperty2(obj1, 'c')); //false

function hasProperty3(obj, key) {
  return obj.hasOwnProperty(key);
}
// 缺点：只看对象本身有没有这属性，不找原型链上的属性
console.log(hasProperty3(obj1, 'toString')); //false
console.log(obj1.toString);

function hasProperty4(obj, key) {
  return key in obj;
}
console.log(hasProperty4(obj1, 'c')); //true
console.log(obj1.toString);
