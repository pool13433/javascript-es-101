const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const arrAllStr = names.every(name => typeof name === 'string')

console.log(arrAllStr)

//true

const bools = [true, true, true, true]
const areAllTrue = bools.every(b => {
  return b === true
})

console.log(areAllTrue) //true

//true


