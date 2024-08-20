// class Scheduler {
//   constructor() {
//     this.set = new Set() // 存储正在执行的任务
//     this.length = 2 // 最大并发任务数
//     this.queue = [] // 存储等待执行的任务
//   }

//   async add(fn) {
//     // 如果并发任务数未满，则立即执行任务
//     if (this.set.size < this.length) {
//       this.consume(fn)
//     } else {
//       // 否则将任务放入队列中
//       this.queue.push(fn)
//     }
//   }

//   async consume(fn) {
//     // 增加到任务集合中
//     this.set.add(fn)

//     // 执行传入的任务
//     await fn()

//     // 任务完成后移除
//     this.set.delete(fn)

//     // 如果队列中有任务，取出下一个任务并执行
//     if (this.queue.length > 0) {
//       const nextTask = this.queue.shift()
//       this.consume(nextTask)
//     }
//   }
// }

// const scheduler = new Scheduler()

// // mock 一个 promise 函数
// const timeout = (time) => {
//   return new Promise((r) => setTimeout(r, time))
// }

// // 添加任务到调度器中
// const addTask = (time, order) => {
//   scheduler.add(() => timeout(time).then(() => console.log("-- order", order)))
// }

// addTask(1000, 1) // 1秒后输出 -- order 1
// addTask(2000, 2) // 2秒后输出 -- order 2
// addTask(300, 3) // 300毫秒后输出 -- order 3
// addTask(400, 4) // 400毫秒后输出 -- order 4

// class Scheduler {
//   constructor() {
//     this.set = new Set()
//     this.length = 2
//     this.queue = []
//   }

//   async add(fn) {
//     if (this.set.size < this.length) {
//       this.consume(fn)
//     } else {
//       this.queue.push(fn)
//     }
//   }

//   async consume(fn) {
//     this.set.add(fn)
//     await fn()
//     this.set.delete(fn)

//     if (this.queue.length > 0) {
//       const nextTask = this.queue.shift()
//       this.consume(nextTask)
//     }
//   }
// }

// const scheduler = new Scheduler()

// // mock 一个 promise 函数
// const timeout = (time) => {
//   return new Promise((r) => setTimeout(r, time))
// }

// const addTask = (time, order) => {
//   scheduler.add(() => timeout(time)).then(() => console.log("-- order", order))
// }

// addTask(1000, 1) // 1秒后输出 -- order 1
// addTask(2000, 2) // 2秒后输出 -- order 2
// addTask(300, 3) // 300毫秒后输出 -- order 3
// addTask(400, 4) // 400毫秒后输出 -- order 4

class Scheduler {
  constructor() {
    this.queue = []; // 任务队列
    this.runningTasks = 0; // 当前正在执行的任务数
    this.maxTasks = 2; // 最大并发任务数
  }

  add(task) {
    return new Promise((resolve) => {
      const runTask = () => {
        // 执行任务时，增加正在执行的任务数
        this.runningTasks++;
        task().then(resolve).finally(() => {
          // 任务完成后，减少正在执行的任务数
          this.runningTasks--;
          // 检查队列中是否有任务，如果有，调度下一个任务
          if (this.queue.length > 0) {
            const nextTask = this.queue.shift();
            nextTask();
          }
        });
      };

      if (this.runningTasks < this.maxTasks) {
        // 如果当前正在执行的任务数小于最大并发数，直接执行任务
        runTask();
      } else {
        // 否则将任务加入队列中
        this.queue.push(runTask);
      }
    });
  }
}

const scheduler = new Scheduler();

// mock 一个 promise 函数
const timeout = (time) => {
  return new Promise(r => setTimeout(r, time));
}

const addTask = (time, order) => {
  scheduler.add(() => timeout(time))
    .then(() => console.log('-- order', order));
}

addTask(1000, 1); // 1秒后输出 -- order 1
addTask(2000, 2); // 2秒后输出 -- order 2
addTask(300, 3);  // 300毫秒后输出 -- order 3
addTask(400, 4);  // 400毫秒后输出 -- order 4
