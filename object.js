// Creating an empty object
//const person = {}

//Creating an objecting with values
const rectangle = {
  length: 20,
  width: 20
}
console.log(rectangle) // {length: 20, width: 20}


//Getting values from an object
const person = {
  name : 'Poolsawat',
  firstName: 'Asabeneh',
  age: 250,
  skills: [ 'HTML','CSS','JavaScript' ],
  getFullName: function() {
	return `${this.firstName}${this.lastName}`
  },
  'phone number': '+3584545454545',
  address : {
    street : '',
    pobox : '',
    city : '',
  }
}

// accessing values using .
console.log(person.firstName)
console.log(person.age)

// value can be accessed using square bracket and key name
console.log(person['firstName'])
console.log(person['age'])

// for instance to access the phone number we only use the square bracket method
console.log(person['phone number'])

// console.log(person.getFullName())

// Getting object keys using Object.keys()
const keys = Object.keys(person)
console.log(keys) //['name', 'age', 'country', 'skills', 'address', 'getPersonInfo']
const address = Object.keys(person.address)
console.log(address) //['street', 'pobox', 'city']

//Getting object values using Object.values()
const values = Object.values(person)
console.log(values)

//Getting object keys and values using Object.entries()
//Object.entries:To get the keys and values in an array
const entries = Object.entries(person)
console.log(entries)

//Checking properties using hasOwnProperty()
//hasOwnProperty: To check if a specific key or property exist in an object
console.log(person.hasOwnProperty('name'))
console.log(person.hasOwnProperty('score'))
