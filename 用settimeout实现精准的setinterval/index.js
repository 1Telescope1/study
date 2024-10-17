function preciseSetInterval(fn, interval) {
  let expected = Date.now() + interval // 记录下一次预计的执行时间

  function step() {
    // 计算当前时间
    let now = Date.now()

    // 计算任务执行的时间偏差
    let drift = now - expected

    // 执行传入的函数
    fn()

    // 更新下一次预计的执行时间
    expected += interval

    // 计算需要延迟的时间
    let delay = Math.max(0, interval - drift)

    // 递归调用下一次的定时器，继续保持精准执行
    setTimeout(step, delay)
  }

  // 启动第一次定时
  setTimeout(step, interval)
}

// 测试
preciseSetInterval(() => {
  console.log("执行时间：", new Date().toLocaleTimeString())
}, 2000) // 每1秒输出一次
