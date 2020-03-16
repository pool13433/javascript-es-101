let string = 'JavaScript'
console.log('string ::=='+string)
let firstLetter = string[0]

console.log('firstLetter ::=='+firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log('lastLetter ::=='+lastLetter)            // t

let lastIndex = string.length - 1

console.log('lastIndex ::=='+lastIndex)  // 9
console.log('string[lastIndex] ::=='+string[lastIndex])    // t


// -----------------------

//let string = 'JavaScript'

console.log('toUpperCase ::=='+string.toUpperCase())     // JAVASCRIPT

console.log('toLowerCase ::=='+string.toLowerCase())     // javascript

console.log('substr(4,6) ::=='+string.substr(4,6))    // Script

console.log('substring(4,10) ::=='+string.substring(4,10))    // Script
console.log('substring(4) ::=='+string.substring(4))       // Script
	

string = '30 Days Of JavaScript'

console.log('split(\' \') ::=='+string.split(' '))  // ["30", "Days", "Of", "JavaScript"]

//-----------------------
string = '30'
console.log('concat ::=='+string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

string = 'Love is the best to in this world'
console.log('endsWith ::=='+string.endsWith('world'))         // true

string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log('search ::=='+string.search('love')) // 2

string = 'love'
console.log('repeat ::=='+string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove



