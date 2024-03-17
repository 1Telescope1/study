function myInstance(left, right) {
  let proto = Object.getPrototypeOf(left);

  while (true) {
    if (proto === right.prototype) {
      return true;
    }
    if (!proto) {
      return false;
    }
    proto = Object.getPrototypeOf(proto);
  }
}

class Test {
  constructor() {
    this.age = 12;
  }
}

const obj = new Test();
const p={age:12}

console.log(myInstance(obj, Test)); 
console.log(myInstance(obj, Array)); 
console.log(myInstance(p, Test)); 

