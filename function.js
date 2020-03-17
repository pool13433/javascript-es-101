//declaring a function without a parameter
function functionName() {
  // code goes here
}
functionName() // calling function by its name and with parentheses

// Function expression
const square1 = function(n) {
  return n * n
}
console.log(square1(2)) // -> 4

//Anonymous Function
const anonymousFun = function() {
  console.log('I am an anonymous function and my value is stored in anonymousFun')
}

// Arrow Function
const square2 = n => {
  return n * n
}
console.log(square2(2)) // -> 4


/*(function(n) {
  console.log(n * n)
})(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below
*/

let squaredNum = (function(n) {
  return n * n
})(10)
console.log(squaredNum)


// syntax
// Declaring a function
function functionName(param = 'value') {
  //codes
}

// Calling function
functionName()
functionName('args')


