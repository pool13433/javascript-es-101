// Different javascript data types
// Let's declare different data types

let firstName = 'Asabeneh'      // string
let lastName = 'Yetayeh'        // string
let country = 'Finland'         // string
let city = 'Helsinki'           // string
let age = 250                   // number, it is not my real age, do not worry about it
let job                         // undefined, because a value was not assigned


console.log('typeof \'Asabeneh\' ::=='+typeof 'Asabeneh')  // string
console.log('typeof firstName ::=='+typeof firstName)   // string
console.log('typeof 10 ::=='+typeof 10)          // number
console.log('typeof 3.14 ::=='+typeof 3.14)        // number
console.log('typeof true ::=='+typeof true)        // boolean
console.log('typeof false ::=='+typeof false)       // boolean
console.log('typeof NaN ::=='+typeof NaN)         // number
console.log('typeof job ::=='+typeof job)         // undefined
console.log('typeof undefined ::=='+typeof undefined)   // undefined
console.log('typeof null ::=='+typeof null)        // object

// -------------------------------------
console.log('-----------------------------')

let num = '10'
console.log('typeof num ::=='+typeof num)
let _parseInt = parseInt(num)
console.log('_parseInt ::=='+_parseInt) // 10
console.log('typeof _parseInt ::=='+typeof _parseInt)

let _Number = Number(num)
console.log('_Number ::=='+_Number) // 10
console.log('typeof _Number ::=='+typeof _Number)

let _plusNum = +num
console.log('_plusNum ::=='+_plusNum) // 10
console.log('typeof _plusNum ::=='+typeof _plusNum)


let float = '9.81'
console.log('typeof float ::=='+typeof float)
let _parseFloat = parseFloat(float)
console.log('_parseFloat ::=='+_parseFloat) // 9.81
console.log('typeof _parseFloat ::=='+typeof _parseFloat)

let _NumberFloat = Number(float)
console.log('_NumberFloat ::=='+_NumberFloat) // 9.81
console.log('typeof _NumberFloat ::=='+typeof _NumberFloat)

let _plusNumFloat = +float
console.log('_plusNumFloat ::=='+_plusNumFloat) // 9.81
console.log('typeof _plusNumFloat ::=='+typeof _plusNumFloat)





