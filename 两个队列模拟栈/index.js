class Stack {
  constructor() {
    this.que1 = [];
    this.que2 = [];
  }

  push(a) {
    this.que1.push(a);
  }

  pop() {
    if (this.size() === 0) {
      return undefined; // 栈为空时返回 undefined
    }
    this.convert();
    return this.que2.shift();
  }

  top() {
    if (this.size() === 0) {
      return undefined; // 栈为空时返回 undefined
    }
    this.convert();
    return this.que2[0];
  }

  convert() {
    if (this.que2.length == 0) {
      while (this.que1.length > 0) {
        this.que2.push(this.que1.pop());
      }
    }
  }

  size() {
    return this.que1.length + this.que2.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.top()); // 输出 3
console.log(stack.pop()); // 输出 3
console.log(stack.size()); // 输出 2
