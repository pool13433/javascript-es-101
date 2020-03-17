//Callback
//A callback is a function which can be passed as parameter to other function. See the example below.

// a callback function, the function could be any name
const callback = (n) => {
  return n * 2
}

// function take other function as a callback
function cube (callback, n) {
  return callback(n) * n
}

console.log(cube(callback, 3))


//Returning function
//Higher order functions return function as a value ​

// Higher order function returning an other function
const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }

  return doSomething
}
console.log(higherOrder(2)(3)(10))


