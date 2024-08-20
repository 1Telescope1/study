const arr = [1, 2, 3, 4]

// 1.Object.prototype.toString
function isArray1(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
}

console.log(isArray1(arr)) //true

// 缺点
const obj1 = {
  [Symbol.toStringTag]: 'abc'
}
console.log(isArray1(obj1)) //false

// 2.instanceof 判断原型链条上有没有Array
function isArray2(arr) {
  return arr instanceof Array
}

console.log(isArray2(arr)) // true

// 继承关系也能判断
class A extends Array {}
const a = new A()
console.log(isArray2(a)) //true

// 缺点
const obj2={}
Object.setPrototypeOf(obj2,Array.prototype)
console.log(isArray2(obj2)); //true

// iframe的array和window的array不同
// const Array1=window.Array
// const iframe=document.querySelector('iframe')
// const Array2=iframe.contentWindow.Array
// const arr2=new Array2()
// console.log(arr2 instanceof Array); //false

// 3. Array.isArray
// 经过Array构造函数出来的array实例有自己特殊的存储结构
// Array.isArray 判断是否有这个特殊结构
console.log(Array.isArray(arr)); //true