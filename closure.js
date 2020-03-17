function outer1Function () {
  let count = 0
  function innerFunction () {
    count++
    return count
  }

  return innerFunction
}
const innerFunc = outer1Function()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())


function outerFunction () {
  let count = 0
  function plusOne () {
    count++
    return count
  }
  function minusOne () {
    count--
    return count
  }

  return {
    plusOne: plusOne(),
    minusOne: minusOne()
  }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)

//1
//1
