// --------------------- Destructuring Arrays ----------------
// example 1
const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers
console.log(numOne, numTwo, numThree)
//1 2 3

const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

console.log(firstPerson, secondPerson,thirdPerson, fourthPerson)

// example 2 
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
console.log(country, city)
}

// --------------------- Renaming during structuring ----------------
// example 1
const rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter)

// example 2
/*const rectangle = {
  width: 20,
  height: 10,
  area: 200
}*/
let { width: w, heigh: h, area: a, perimeter: p } = rectangle

console.log(w, h, a, p)

//--------------------- Destructuring object during iteration ----------------
const todoList = [
  {
    task:'Prepare JS Test',
    time:'4/1/2020 8:30',
    completed:true
  },
  {
    task:'Give JS Test',
    time:'4/1/2020 10:00',
    completed:false
  },
  {
    task:'Assess Test Result',
    time:'4/1/2020 1:00',
    completed:false
  }
  ]
  
  for (const {task, time, completed} of todoList){
    console.log(task, time, completed)
  }
  
  

