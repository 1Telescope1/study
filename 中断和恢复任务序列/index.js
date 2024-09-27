function processTasks(tasks) {
  const result = []
  let stop = true
  let index = 0
  let prom = null

  function start() {
    return new Promise(async (resolve, reject) => {
      if (prom) {
        resolve(prom)
      }
      if (!stop) return
      stop = false
      while (index < tasks.length) {
        try {
          console.log("执行中", index)
          const res = await tasks[index]()
          console.log(res, "执行完成", index)
          result.push(res)
        } catch (error) {
          stop = true
          reject(error)
          prom = Promise.reject(error)
          return
        }

        index++
        if (stop && index < tasks.length - 1) {
          console.log("执行中断")
          // 中断
          return
        }
      }
      // 成功
      stop = true
      resolve(result)
      prom = Promise.resolve(result)
    })
  }
  function pause() {
    console.log("pause")
    stop = true
  }
  return {
    start,
    pause
  }
}

const fetchPro = (time, str) => {
  return () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(str)
      }, time)
    })
  }
}

const fet1 = fetchPro(1000, "fet1")
const fet2 = fetchPro(2000, "fet2")
const fet3 = fetchPro(2000, "fet3")
const fet4 = fetchPro(2000, "fet4")
const fet5 = fetchPro(2000, "fet5")
const tasks = [fet1, fet2, fet3, fet4, fet5]

const { start, pause, stopProcess, index } = processTasks(tasks)
// setTimeout(() => {
//   pause()
// }, 2000)

// setTimeout(() => {
//   start()
// }, 7000)
async function test() {
  const result = await start()
  console.log(result)
  setTimeout(async () => {
    const res = await start()
    console.log(res)
  }, 10000)
}

test()
