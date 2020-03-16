let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3	// true
let falseValue = 4 < 3  // false

console.log('isLightOn ::=='+isLightOn)
console.log('isRaining ::=='+isRaining)
console.log('isHungry ::=='+isHungry)
console.log('isMarried ::=='+isMarried)
console.log('truValue ::=='+truValue)
console.log('falseValue ::=='+falseValue)

console.log('--------- Truthy Values --------')
const _positive = 99
console.log(_positive ? 'true' : 'false')
const _string = 'xx'
console.log(_string ? 'true' : 'false')

console.log('---------- Falsy Values----------')
const _zero = 0
console.log(_zero ? 'true' : 'false')
const _null = null
console.log(_null ? 'true' : 'false')
const _undefined = undefined
console.log(_undefined ? 'true' : 'false')
const _NaN = NaN
console.log(_NaN ? 'true' : 'false')
const _empty = ''
console.log(_empty ? 'true' : 'false')	     
