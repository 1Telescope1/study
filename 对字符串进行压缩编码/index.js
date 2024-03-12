const str = 'aaaabbc';

function encode(str) {
  let p;
  const res = [];
  let i = -1;
  for (const s of str) {
    if (s != p) {
      i++;
      p = s;
      res[i] = [s, 1];
    } else {
      res[i][1] = res[i][1] + 1;
    }
  }
  const flag = res
    .map(([s, cnt]) => {
      if (cnt != 1) {
        return s + cnt;
      } else {
        return s;
      }
    })
    .join('');
  return flag;
}

console.log(encode(str));
