function red() {
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve('red')
    },1000)
  })
}

function blue() {
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve('blue');
    },1000)
  })
}

function green() {
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve('green');
    },1000)
  })
}

const p=[red,blue,green]
let i=0

async function test() {
  for(let i=0;i<p.length;i++) {
    const result=await p[i]()
    console.log(result);
  }
  test()
}

test()

// function red() {
//   console.log("red");
// }

// function blue() {
//   console.log("blue");
// }

// function green() {
//   console.log("green");
// }

// const task = (timer, light) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       if (light == "red") {
//         red();
//       } else if (light == "blue") {
//         blue();
//       } else if (light == "green") {
//         green();
//       }
//       resolve();
//     }, timer);
//   });
// };

// promise方法
// const step = () => {
//   task(3000, "red").then(() =>
//     task(2000, "blue")
//       .then(() => task(1000, "green"))
//       .then(step)
//   );
// };
// step()

// async await方法
// const taskRunner=async()=>{
//   await task(3000, "red")
//   await task(2000, "blue")
//   await task(1000, "green")
//   taskRunner()
// }
// taskRunner()
