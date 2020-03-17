const arr = require('./data-array.js')

const modifiedArray = arr.map(function(element, index) {
  return element
})

/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map(num => num * num)

console.log(numbersSquare)

//[1, 4, 9, 16, 25]
