// 节流
function throttle(fn,time) {
  let oldTime=Date.now()
  return function(...args) {
    const context=this
    let newTime=Date.now()
    if(newTime-oldTime>time) {
      fn.apply(context,args)
      oldTime=Date.now()
    }
  }
}