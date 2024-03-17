function makeRequest() {
  // 模拟异步请求
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Request successful');
    }, 2000);
  });
}

function timeoutPromise(ms) {
  // 创建一个 Promise，用于表示超时
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Request timed out'));
    }, ms);
  });
}

const timeoutValue = 1500; // 设置超时时间
const requestPromise = makeRequest(); // 原始请求 Promise
const timeoutPromiseInstance = timeoutPromise(timeoutValue); // 超时 Promise

// 使用 Promise.race 来判断是否超时
Promise.race([requestPromise, timeoutPromiseInstance])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message); 
  });

