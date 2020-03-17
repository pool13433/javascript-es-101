// syntax
class ClassName {
	//  code goes here
}

class Person {
  constructor(firstName = 'poolsawat', lastName='apin') {
	this.firstName = firstName
	this.lastName = lastName
  }
}
const person1 = new Person('Asabeneh', 'Yetayeh')
console.log(person1)
//Person {firstName: "Asabeneh", lastName: "Yetayeh"}
