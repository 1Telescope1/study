// 数组里面有循环引用会无限循环
function existCircular(obj) {
  const map = new Map();

  const values = Object.values(obj);

  while (values.length) {
    const item = values.pop();
    if (typeof item === 'object' && item != null) {
      if (map.get(item) && item === obj) {
        return true;
      } else {
        map.set(item, true);
        values.push(...Object.values(item));
      }
    }
  }
  return false;
}

let obj1 = {
  name: 'Object 1',
  reference: null
};

let obj2 = {
  name: 'Object 2',
  reference: obj1
};

obj1.reference = obj2;

// console.log(JSON.stringify(obj1));

const item = {
  a: 'abc'
};
item.b = item;
const a = [item];

console.log(Object.values(a));

// console.log(JSON.stringify(a));

console.log(existCircular(a));
