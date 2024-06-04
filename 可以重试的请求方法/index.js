async function request(url, maxCount) {
  try {
    return await fetch(url);
  } catch (err) {
    maxCount <= 0 ? Promise.reject(err) : request(url, maxCount - 1);
  }
}

request('dasdasd', 5)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
