function myPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((element) => {
      element
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
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
    reject(3);
  }, 3000);
});

myPromiseRace([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
