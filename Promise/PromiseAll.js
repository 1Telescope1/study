function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const len = promises.length;
    let cnt = 0;
    const data = [];
    for (let index = 0; index < promises.length; index++) {
      promises[index]
        .then((res) => {
          cnt++;
          data[index] = res;
          if (cnt == len) {
            resolve(data);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});

myPromiseAll([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
