function parse(url) {
  const index = url.indexOf('?');
  const str = url.slice(index + 1);
  const obj = {};
  str.split('&').map((item) => {
    let [key, value] = item.split('=');
    key = decodeURIComponent(key);
    value = decodeURIComponent(value);
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  });
  return obj;
}

const url = 'https://shanyue.tech?a=1%2B1%3D2&b=&c=1&c=2&c=3&d=abc';

console.log(parse(url));
