// 深拷贝
function deepClone(obj, hash = new WeakMap()) {
  if (obj == null) return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (typeof obj === "function") return obj
  if (typeof obj != 'object') return obj;
  if (hash.get(obj)) return hash.get(obj);
  // 使用 new obj.constructor() 可以确保克隆对象与原始对象具有相同的构造函数。这样可以保留原始对象的类型信息，并确保克隆对象具有与原始对象相同的行为和属性。
  // 例如，如果原始对象是一个自定义类的实例，使用 new obj.constructor() 可以确保克隆对象也是该类的实例，而不是简单的 Object 对象。
  const cloneObj = new obj.constructor();
  hash.set(obj, cloneObj);
  for (let key in obj) {
    // obj.hasOwnProperty(key) 用于检查属性是否是对象自身的属性，而不是原型链上的属性。在深拷贝过程中，我们通常只需要拷贝对象自身的属性，而忽略原型链上的属性。
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}
