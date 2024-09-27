class MyStack {
  constructor() {
    // 初始化两个队列
    this.queue1 = []
    this.queue2 = []
  }

  // 向栈中压入元素
  push(x) {
    this.queue1.push(x)
  }

  // 从栈中弹出元素并返回
  pop() {
    if (this.empty()) {
      return null // 如果栈为空，则返回 null
    }

    // 将 queue1 中的元素移动到 queue2 中，只保留最后一个元素
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift())
    }

    // 取出 queue1 中的最后一个元素，这就是栈顶元素
    const poppedValue = this.queue1.shift()

    // 交换 queue1 和 queue2 的角色
    let temp = this.queue1
    this.queue1 = this.queue2
    this.queue2 = temp

    return poppedValue
  }

  // 获取栈顶元素
  top() {
    if (this.empty()) {
      return null // 如果栈为空，则返回 null
    }

    // 将 queue1 中的元素移动到 queue2 中，只保留最后一个元素
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift())
    }

    // 获取 queue1 中的最后一个元素，这就是栈顶元素
    const topValue = this.queue1[0]

    // 将最后一个元素放回 queue2 中
    this.queue2.push(this.queue1.shift())

    // 交换 queue1 和 queue2 的角色
    let temp = this.queue1
    this.queue1 = this.queue2
    this.queue2 = temp

    return topValue
  }

  // 检查栈是否为空
  empty() {
    return this.queue1.length === 0 && this.queue2.length === 0
  }
}

// 示例用法
const stack = new MyStack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.pop()) // 输出：3
console.log(stack.top()) // 输出：2
console.log(stack.pop()) // 输出：2
console.log(stack.empty()) // 输出：false
console.log(stack.pop()) // 输出：1
console.log(stack.empty()) // 输出：true
