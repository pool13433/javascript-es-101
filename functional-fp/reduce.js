const numbers = require('./data-array')

const sum = numbers.reduce((accum, curr) => accum + curr)

console.log(sum)

//120
