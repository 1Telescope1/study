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
