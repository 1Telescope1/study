// 防抖
function debounce(fn,wait) {
  let timer=null
  return function(...args) {
    const context=this
    if(timer) clearTimeout(timer)
    timer=setTimeout(()=>{
      fn.apply(context,args)
    },wait)
  }
}

function p(age,name) {
  console.log(age,'---',name);
}

let t=debounce(p,2000)
t(18,'xs',123)

function debounce(fn, delay, immediate) {
  let timer;
  return function(...args) {
    if (immediate && !timer) {
      fn.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(function() {
      if (!immediate) {
        fn.apply(this, args);
      }
      timer = null;
    }, delay);
  };
}


