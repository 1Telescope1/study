function counter(initValue, step) {
  let value = initValue;
  const add = () => {
    value += step;
    return value;
  };

  const sub = () => {
    value -= step;
    return value;
  };

  return { add, sub };
}

const c = counter(4, 2);
c.add(); // 6
c.sub(); // 4
c.add(); // 6
c.add(); // 8
console.log(c.add());
