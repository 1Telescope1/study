const requestList = [];
for (let i = 0; i < 100; i++) {
  const promise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('接口完成：' + i);
      }, Math.random() * 1000);
    });
  };
  requestList.push(promise);
}

const pool = new Set();
const waitQue = [];
function requestQue(request, max) {
  return new Promise((resolve, reject) => {
    if (pool.size > max) {
      waitQue.push(request);
    } else {
      pool.add(request);
      request()
        .then((res) => {
          console.log('done', res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          pool.delete(request);
          console.log('等待的请求数量：', waitQue.length);
          if (waitQue.length > 0) {
            const nextRequest = waitQue.shift();
            requestQue(nextRequest, max);
          } else if (pool.size == 0) {
            console.log('all done');
          }
        });
    }
  });
}

requestList.forEach((request, index) => {
  requestQue(request, 10);
});

class Scheduler {
  constructor() {
    this.queue = [] // 任务队列
    this.runningTasks = 0 // 当前正在执行的任务数
    this.maxTasks = 2 // 最大并发任务数
  }

  add(task) {
    return new Promise((resolve) => {
      const runTask = () => {
        // 执行任务时，增加正在执行的任务数
        this.runningTasks++
        task()
          .then(resolve)
          .finally(() => {
            // 任务完成后，减少正在执行的任务数
            this.runningTasks--
            // 检查队列中是否有任务，如果有，调度下一个任务
            if (this.queue.length > 0) {
              const nextTask = this.queue.shift()
              nextTask()
            }
          })
      }

      if (this.runningTasks < this.maxTasks) {
        // 如果当前正在执行的任务数小于最大并发数，直接执行任务
        runTask()
      } else {
        // 否则将任务加入队列中
        this.queue.push(runTask)
      }
    })
  }
}

const scheduler = new Scheduler()

// mock 一个 promise 函数
const timeout = (time) => {
  return new Promise((r) => setTimeout(r, time))
}

const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log("-- order", order))
}


addTask(1000, 1) // 1秒后输出 -- order 1
addTask(2000, 2) // 2秒后输出 -- order 2
addTask(300, 3) // 300毫秒后输出 -- order 3
addTask(400, 4) // 400毫秒后输出 -- order 4
