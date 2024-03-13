function mySleep(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

async function test() {
  await mySleep(1000);
  console.log('睡眠1s');
}

test();
