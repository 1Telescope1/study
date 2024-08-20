Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }

  const fn = this

  function boundFunction(...innerArgs) {
    const isNewInstance = this instanceof boundFunction
    const finalContext = isNewInstance ? this : context

    return fn.apply(finalContext, [...args, ...innerArgs])
  }

  boundFunction.prototype = Object.create(fn.prototype)

  return boundFunction
}

// Test example
function add(a, b) {
  console.log(this, a, b)
  return a + b
}

const test = add.myBind({ age: 123 }, 1)
test(5) // Logs: { age: 123 } 1 5
const instance = new test(5) 
