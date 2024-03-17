function mySleep(time) {
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve()
    },time)
  })
}

async function test() {
  await mySleep(2000)
  console.log(123);
}
test()

