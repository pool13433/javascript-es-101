const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const bools = [true, true, true, true]

const areSomeTrue = bools.some(b => {
  return b === true
})

console.log(areSomeTrue) //true

const areAllStr = names.some(name => typeof name === 'number')
console.log(areAllStr) // false
