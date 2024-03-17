function create(obj) {
  function F() {}
  F.prototype=obj
  return new F()
}

let obj={
  a:123
}

const p=create(obj)
console.log(obj);